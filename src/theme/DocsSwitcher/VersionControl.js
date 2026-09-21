/**
 * 文档页左侧「文档 + 版本」一体盒子中, 右侧的「版本切换」控件。
 *
 * 由 DocsSwitcher 注入到盒子右侧(约 30% 宽度), 取数逻辑沿用原导航栏里的
 * NavbarItem/VersionSwitcher(已并入此处):
 * - 多版本实例(1Panel/JumpServer/DataEase/MaxKB): 渲染下拉, 可切换版本;
 * - 单版本实例(SQLBot/Cordys): 只展示当前版本静态标签(如 v1), 不弹菜单。
 *
 * 菜单同样 fixed + createPortal(<body>): 侧边栏祖先有 overflow-y:auto,
 * absolute 菜单会被裁剪(原因见 DocsSwitcher/index.js 顶部注释)。
 */
import React, {useState, useRef, useEffect} from 'react';
import {createPortal} from 'react-dom';
import Link from '@docusaurus/Link';
import {
  useVersions,
  useActiveDocContext,
} from '@docusaurus/plugin-content-docs/client';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

function useOnClickOutside(refs, handler) {
  useEffect(() => {
    const refList = Array.isArray(refs) ? refs : [refs];
    // 与 DocsSwitcher 一致: 用 click(冒泡) 而非 mousedown, 否则 portal 菜单项
    // 的 <Link> 导航会因菜单在 mousedown 阶段被移除而丢失。
    const listener = (e) => {
      const inside = refList.some(
        (r) => r.current && r.current.contains(e.target),
      );
      if (inside) return;
      handler();
    };
    document.addEventListener('click', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler]);
}

export default function VersionControl({pluginId, onOpen}) {
  // 所有 hooks 无条件执行, 不能提前 return(否则跨产品客户端导航时 hooks 数量
  // 变化, React 抛 "Rendered fewer hooks than expected")。
  const versions = useVersions(pluginId);
  const activeDocContext = useActiveDocContext(pluginId);
  const activeName = activeDocContext?.activeVersion?.name;

  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const [menuPos, setMenuPos] = useState(null);
  // 按钮与 portal 菜单都算「内部」, 外部点击才关闭
  useOnClickOutside([btnRef, menuRef], () => setOpen(false));

  // 打开时测量按钮位置, 菜单右对齐到版本按钮右边缘(向左展开, 不越出左侧盒子)
  useEffect(() => {
    if (!open) return undefined;
    const btn = btnRef.current;
    if (!btn) return undefined;
    const r = btn.getBoundingClientRect();
    setMenuPos({
      top: r.bottom + 4,
      right: window.innerWidth - r.right,
      minWidth: r.width,
    });
    const onScroll = () => setOpen(false);
    window.addEventListener('scroll', onScroll, true);
    return () => window.removeEventListener('scroll', onScroll, true);
  }, [open]);

  // 单版本: 仅展示当前版本标签, 不可点击
  if (!versions || versions.length <= 1) {
    const only = versions?.[0]?.label ?? '';
    return (
      <span className={styles.versionStatic} title={only}>
        {only}
      </span>
    );
  }

  const items = versions.map((v) => {
    const target =
      activeDocContext?.alternateDocVersions?.[v.name] ??
      v.docs.find((d) => d.id === v.mainDocId);
    return {name: v.name, label: v.label, path: target?.path ?? v.path};
  });
  const current = items.find((it) => it.name === activeName) ?? items[0];

  const ariaLabel = translate({
    id: 'theme.docs.versionDropdown',
    message: '选择版本',
  });

  const menu = open && menuPos ? (
    createPortal(
      <ul
        ref={menuRef}
        className={styles.switcherMenu}
        style={{
          top: menuPos.top,
          right: menuPos.right,
          minWidth: menuPos.minWidth,
        }}>
        {items.map((it) => (
          <li key={it.name}>
            <Link
              className={
                it.name === current?.name ? styles.switcherActive : styles.switcherItem
              }
              to={it.path}
              onClick={() => setOpen(false)}>
              {it.label}
            </Link>
          </li>
        ))}
      </ul>,
      document.body,
    )
  ) : null;

  return (
    <>
      <button
        ref={btnRef}
        className={styles.versionTrigger}
        onClick={() => {
          if (!open) onOpen?.(); // 打开版本菜单时收起左侧文档菜单
          setOpen(!open);
        }}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={ariaLabel}
        title={ariaLabel}>
        <span className={styles.versionLabel}>{current?.label}</span>
        <span className={styles.versionCaret}>▾</span>
      </button>
      {menu}
    </>
  );
}
