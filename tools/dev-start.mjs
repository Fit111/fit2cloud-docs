#!/usr/bin/env node
/**
 * 包装 docusaurus start：按本机当前可用的虚拟内存额度（物理内存 + 页面文件）
 * 自动计算 --max-old-space-size，并写进 NODE_OPTIONS，让 Rspack 等子进程也继承。
 *
 * Windows 上“内存不足”崩溃多数是提交额度（Commit Limit）耗尽，而不是 Node 堆上限太小，
 * 需要配合足够大的页面文件（如 G:\pagefile.sys）。手动指定堆上限：DOCS_DEV_HEAP_MB=6144。
 */
import {spawn, spawnSync} from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const MIN_HEAP_MB = 2048;
const MAX_HEAP_MB = 8192;
const LOW_COMMIT_WARN_MB = 4096;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docusaurus = path.join(root, 'node_modules', '@docusaurus', 'core', 'bin', 'docusaurus.mjs');

function getWindowsCommitMB() {
  const result = spawnSync(
    'powershell.exe',
    [
      '-NoProfile',
      '-Command',
      '$o = Get-CimInstance Win32_OperatingSystem; "$($o.FreeVirtualMemory) $($o.TotalVirtualMemorySize)"',
    ],
    {encoding: 'utf8', timeout: 10000, windowsHide: true},
  );
  const [free, total] = (result.stdout || '').trim().split(/\s+/).map(Number);
  if (!free || !total) {
    return null;
  }
  return {freeMB: Math.floor(free / 1024), totalMB: Math.floor(total / 1024)};
}

function getAvailableMB() {
  if (process.platform === 'win32') {
    const commit = getWindowsCommitMB();
    if (commit) {
      return {...commit, source: '虚拟内存（物理内存 + 页面文件）'};
    }
  }
  return {
    freeMB: Math.floor(os.freemem() / 1024 / 1024),
    totalMB: Math.floor(os.totalmem() / 1024 / 1024),
    source: '物理内存',
  };
}

function resolveHeapMB(freeMB) {
  const manual = Number(process.env.DOCS_DEV_HEAP_MB);
  if (manual > 0) {
    return manual;
  }
  return Math.min(MAX_HEAP_MB, Math.max(MIN_HEAP_MB, Math.floor(freeMB * 0.5)));
}

const available = getAvailableMB();
const heapMB = resolveHeapMB(available.freeMB);
const heapFlag = `--max-old-space-size=${heapMB}`;

console.log(
  `[dev-start] ${available.source}可用 ${(available.freeMB / 1024).toFixed(1)} GB / ` +
    `共 ${(available.totalMB / 1024).toFixed(1)} GB，Node 堆上限设为 ${heapMB} MB`,
);
if (available.freeMB < LOW_COMMIT_WARN_MB) {
  console.warn(
    '[dev-start] 可用内存额度不足 4 GB，启动可能因内存不足退出。' +
      '请关闭部分程序，或调大页面文件（系统属性 > 高级 > 性能 > 虚拟内存）。',
  );
}

const prev = (process.env.NODE_OPTIONS || '').replace(/--max-old-space-size=\d+/g, '').trim();

const child = spawn(process.execPath, [heapFlag, docusaurus, 'start', ...process.argv.slice(2)], {
  cwd: root,
  stdio: 'inherit',
  env: {...process.env, NODE_OPTIONS: `${prev} ${heapFlag}`.trim()},
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => child.kill(signal));
}

child.on('exit', (code, signal) => {
  if (signal) {
    process.exit(1);
  }
  process.exit(code ?? 1);
});
