/**
 * 文档页左侧导航栏顶部的「快速切换文档」下拉。
 *
 * 展示当前所在的产品文档，并可一键切换到本站其他产品文档。
 * - 仅在文档页渲染（由 DocRoot/Layout/Sidebar 注入）；
 * - 用 useActivePluginAndVersion 精确拿到当前文档实例 id，
 *   并 fallback 到 pathname 首段，保证适配多版本/多实例。
 * - 列出「本站有文档」的产品，跳转各自文档站首页（/xxx/）。
 */
import React, {useState, useRef, useEffect} from 'react';
import {createPortal} from 'react-dom';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {useActivePluginAndVersion} from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

// 本站提供文档的产品：routeBasePath 与文档实例路由前缀一致，用于跳转。
// id 与跳转路径分离：routeBasePath 用于 URL，id 用于匹配当前插件。
const DOCS_PRODUCTS = [
  {name: '1Panel AI 网关', id: 'ai-gateway', routeBasePath: 'ai-gateway'},
  {name: '1Panel 面板', id: '1panel', routeBasePath: '1panel'},
  {name: 'JumpServer 堡垒机', id: 'jumpserver', routeBasePath: 'jumpserver'},
  {name: 'DataEase BI 工具', id: 'dataease', routeBasePath: 'dataease'},
  {name: 'MaxKB 智能体平台', id: 'maxkb', routeBasePath: 'maxkb'},
  {name: 'SQLBot 智能问数', id: 'sqlbot', routeBasePath: 'sqlbot'},
  {name: 'Cordys CRM', id: 'cordys', routeBasePath: 'cordys'},
];

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default function DocsSwitcher() {
  const {pathname} = useLocation();
  const apv = useActivePluginAndVersion();

  // 当前文档插件 id；拿不到时用 pathname 首段兜底
  const pluginId = apv?.activePlugin?.pluginId;
  let current;
  if (pluginId) {
    current = DOCS_PRODUCTS.find((p) => p.id === pluginId);
  }
  if (!current) {
    const seg = '/' + (pathname.split('/').filter(Boolean)[0] ?? '');
    current = DOCS_PRODUCTS.find((p) => '/' + p.routeBasePath === seg);
  }
  if (!current) return null; // 非本站文档页（如站点根/门户介绍）

  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const btnRef = useRef(null);
  // 下拉菜单的 fixed 定位坐标(基于按钮 getBoundingClientRect), null 表示未测量
  const [menuPos, setMenuPos] = useState(null);
  useOnClickOutside(ref, () => setOpen(false));

  // 打开时测量按钮位置, 用于把悬浮菜单对齐到按钮正下方
  useEffect(() => {
    if (!open) return undefined;
    const btn = btnRef.current;
    if (!btn) return undefined;
    const r = btn.getBoundingClientRect();
    setMenuPos({top: r.bottom + 4, left: r.left, width: r.width});
    const onScroll = () => setOpen(false);
    window.addEventListener('scroll', onScroll, true); // 滚动(含侧边栏)时关闭, 避免菜单脱离按钮
    return () => window.removeEventListener('scroll', onScroll, true);
  }, [open]);

  const menu = open && menuPos ? (
    createPortal(
      <ul
        className={styles.switcherMenu}
        style={{top: menuPos.top, left: menuPos.left, minWidth: menuPos.width}}>
        {DOCS_PRODUCTS.map((p) => (
          <li key={p.id}>
            <Link
              className={
                p.id === current.id ? styles.switcherActive : styles.switcherItem
              }
              to={`/${p.routeBasePath}/`}>
              {p.name}
            </Link>
          </li>
        ))}
      </ul>,
      document.body,
    )
  ) : null;

  return (
    <div className={styles.switcher} ref={ref}>
      <button
        ref={btnRef}
        className={styles.switcherButton}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        title="切换文档">
        <span className={styles.switcherLabel}>{current.name}</span>
        <span className={styles.switcherCaret}>▾</span>
      </button>
      {menu}
    </div>
  );
}
