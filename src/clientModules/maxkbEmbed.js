// 全局: 注入 MaxKB 智能小助手(浮窗模式), 全站生效(首页 + 各产品文档页)。
//
// MAXKB_EMBED_SRC 是 MaxKB 控制台"嵌入第三方网站-浮窗模式"生成的 script 地址, 原样 copy。
// 注意: 不能用 <script> 标签静态写进页面, 必须用 DOM API 动态创建才能保证可控重试。
//
// 为什么放在 clientModule 而不是首页组件:
//   clientModule 被打进客户端入口 main.js, 而 main.js 是 defer 加载 —— defer 脚本在文档
//   解析完成后、DOMContentLoaded 之前执行, 且会推迟 window load, 因此这里注册的 load
//   监听一定早于 window load 触发。首页组件则是懒加载 chunk(挂载时机晚于 window load),
//   只能靠"补发 load"唤醒, 是个不确定环节。提前到此可让 embed.js 走自然 load 路径。
//
// embed.js 的两个关键特性(已读源码确认, 约 13KB, 由服务端动态生成, 每次返回的
// maxkb-<hash> 都不同):
//   ① 唯一初始化入口是脚本末尾的 window.addEventListener('load', embedChatbot), 没有 once;
//   ② initMaxkb() 完全不幂等 —— 直接 createElement + appendChild, 无"已存在则跳过"检查。
// 合起来意味着: 重复派发 load 必然挂出第二份浮窗。所以任何补偿动作都必须先确认
// "页面上还没有浮窗", 这是本文件所有时序处理的前提。
//
// 拼 query: 追加参数(如 asker / 工作流 API 输入字段)直接拼到 MAXKB_EMBED_SRC 后面;
// 浮窗模式后端仅透传工作流已定义的 API 输入字段(白名单过滤, asker 例外)。
const MAXKB_EMBED_SRC =
  'https://maxkb-internal.fit2cloud.com/chat/api/embed?protocol=https&host=maxkb-internal.fit2cloud.com&token=d876eead1840ecc7';

const SCRIPT_ID = 'maxkb-embed-script';

// embed.js 是内部服务(偶发抖动/5xx), 下载失败时重试自愈。
// 重试只发生在脚本从未执行成功时 —— 此时页面还没有浮窗, 因此安全无副作用。
const MAXKB_RETRY_MAX = 2;
const MAXKB_RETRY_DELAY = 3000;
// 脚本已执行后, 再等多久复查一次浮窗是否真的挂出来了(毫秒)
const MAXKB_FALLBACK_DELAY = 6000;

// 浮窗 DOM 是否已存在。必须排除 script 自身: 注入的 script 带 id="maxkb-embed-script",
// 同样命中 [id^="maxkb-"], 不过滤会导致"浮窗不存在"恒为 false。
function hasMaxkbWindow() {
  return Boolean(document.querySelector('[id^="maxkb-"]:not(script)'));
}

function loadMaxkbEmbed(attempt = 0) {
  if (document.getElementById(SCRIPT_ID)) {
    return;
  }
  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = MAXKB_EMBED_SRC;

  // 三种状态都判断过才补发 load: 自然 load 已发生 + embed.js 已执行 + 浮窗 DOM 还不存在。
  // 同时满足才补发, 避免"自然 load 与补发 load 各触发一次 embedChatbot"挂出双浮窗。
  // 正常路径下 embed.js 在 load 之前执行, 由自然 load 唤醒, 这里不会触发;
  // 它覆盖的是 embed.js 下载/执行慢于 load 的时序(网络慢、服务端刚冷启)。
  let naturalLoaded = document.readyState === 'complete';
  let executed = false;
  const replayIfMissing = () => {
    if (naturalLoaded && executed && !hasMaxkbWindow()) {
      window.dispatchEvent(new Event('load'));
      return true;
    }
    return false;
  };
  window.addEventListener(
    'load',
    () => {
      naturalLoaded = true;
      // 等本轮事件派发结束(embed.js 自己的 load 监听也在本轮执行)再判断
      setTimeout(replayIfMissing, 0);
    },
    {once: true},
  );
  script.onload = () => {
    executed = true;
    replayIfMissing();
    // 兜底复查: 此刻 window load 必已发生(naturalLoaded 为 true), 若浮窗仍没挂出来,
    // 可能只是上一轮时机没对上, 再补发一次(浮窗不存在时补发是安全的)。
    setTimeout(() => {
      if (!replayIfMissing()) {
        // 走到这里: 脚本已执行 + load 已发生 + 浮窗仍不存在。
        // 通常是浏览器插件/隐私模式拦截了 embed iframe, 或 embed 服务端异常。
        // 此处只告警、不再重复补发 —— embed.js 的 embedChatbot 非幂等,
        // 浮窗已存在时重复补发会挂出第二份浮窗。
        console.warn(
          '[maxkb-embed] embed.js 已执行但浮窗未出现, 请检查网络或浏览器拦截策略',
        );
      }
    }, MAXKB_FALLBACK_DELAY);
  };
  // embed.js 下载失败(网络抖动 / 服务端 5xx): 若不处理, 浮窗会永久缺失。
  // 此刻脚本从未执行、页面也没有浮窗, 因此重试是安全的。
  script.onerror = () => {
    script.remove();
    if (attempt < MAXKB_RETRY_MAX) {
      console.warn(
        `[maxkb-embed] embed.js 加载失败, ${MAXKB_RETRY_DELAY / 1000}s 后第 ${
          attempt + 1
        }/${MAXKB_RETRY_MAX} 次重试`,
      );
      setTimeout(() => loadMaxkbEmbed(attempt + 1), MAXKB_RETRY_DELAY);
    } else {
      console.warn('[maxkb-embed] 重试已耗尽, 本次浮窗不可用');
    }
  };

  // clientModule 在 defer 的 main.js 中执行, 此时 body 必已存在; 兜底一次以防时序变化。
  const mount = () => (document.body || document.documentElement).appendChild(script);
  if (document.body) {
    mount();
  } else {
    document.addEventListener('DOMContentLoaded', mount, {once: true});
  }
}

// 构建期 SSR 会执行本模块, 需保证无 document/window 时不报错。
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  loadMaxkbEmbed();
}
