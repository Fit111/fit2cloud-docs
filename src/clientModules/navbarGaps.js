// 全局: 导航栏是限宽悬浮卡, 其四周(上方 + 左右两侧)会有空隙让主体内容在滚动时透出。
// 这里以导航栏元素(nav[aria-label="主导航"])的实际位置/尺寸为界, 动态把顶部条和左右
// 两个空白遮挡元素(.navbar-gap-*)对齐到 nav 元素, 使得内容一接触到 nav 元素即被隐藏。
// 相对固定数值的好处: nav 尺寸因内容/断点变化时, 遮挡仍无缝贴合, 不露缝隙。
const GAP_SELECTOR = 'nav[aria-label="主导航"]';

function ensureGaps() {
  let wrap = document.querySelector('.navbar-gap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.className = 'navbar-gap';
    wrap.setAttribute('aria-hidden', 'true');
    for (const cls of ['navbar-gap-top', 'navbar-gap-left', 'navbar-gap-right']) {
      const el = document.createElement('div');
      el.className = cls;
      wrap.appendChild(el);
    }
    document.body.appendChild(wrap);
  }
  return wrap;
}

function applyGaps() {
  if (typeof document === 'undefined' || typeof window === 'undefined') return;
  const nav = document.querySelector(GAP_SELECTOR);
  const wrap = ensureGaps();
  if (!nav) {
    wrap.style.display = 'none';
    return;
  }
  wrap.style.display = 'block';

  const r = nav.getBoundingClientRect();
  const gapWidth = Math.max(0, (window.innerWidth - r.width) / 2); // 悬浮卡左右空隙

  const top = wrap.querySelector('.navbar-gap-top');
  const left = wrap.querySelector('.navbar-gap-left');
  const right = wrap.querySelector('.navbar-gap-right');

  // 上方空隙: 视口顶到 nav 顶部(一整条)
  top.style.top = '0';
  top.style.height = `${r.top}px`;
  // 左右空隙: 覆盖 nav 整行的左右两侧列
  left.style.top = `${r.top}px`;
  left.style.height = `${r.height}px`;
  left.style.width = `${gapWidth}px`;
  left.style.left = '0';
  right.style.top = `${r.top}px`;
  right.style.height = `${r.height}px`;
  right.style.width = `${gapWidth}px`;
  right.style.left = 'auto';
  right.style.right = '0';
}

export function onRouteDidUpdate() {
  applyGaps();
}

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', applyGaps, {passive: true});
  window.addEventListener('resize', applyGaps);
  applyGaps();
}
