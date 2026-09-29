/**
 * Rspress 专有组件 shim: PageTabs / PageTab。
 *
 * Rspress 的 <PageTabs><PageTab label="...">content</PageTab></PageTabs>
 * 渲染为页面级的大标签页(常用于整页多方案的切换)。
 * 复用 Tabs/Tab 的交互, 仅换一套更大的样式。
 */
import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';

function tabId(tab) {
  const id = tab?.props?.id;
  return id ? String(id) : '';
}

function hashId() {
  if (typeof window === 'undefined') return '';
  return decodeURIComponent(window.location.hash.replace(/^#/, ''));
}

export function PageTab({children}) {
  return <div className={styles.pageTabStandalone}>{children}</div>;
}

export default function PageTabs({children}) {
  const tabs = React.Children.toArray(children).filter(
    (c) => React.isValidElement(c),
  );
  if (tabs.length === 0) return null;

  const labels = tabs.map((t) => {
    const props = t.props || {};
    return props.label !== undefined ? String(props.label) : '默认';
  });

  const ids = tabs.map(tabId);
  const [active, setActive] = useState(0);
  const safeActive = Math.min(active, labels.length - 1);

  useEffect(() => {
    const sync = () => {
      const hash = hashId();
      const idx = ids.indexOf(hash);
      if (idx >= 0) setActive(idx);
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, [ids.join('\0')]);

  useEffect(() => {
    const hash = hashId();
    if (hash && ids[safeActive] === hash) {
      document.getElementById(hash)?.scrollIntoView();
    }
  }, [safeActive, ids.join('\0')]);

  if (tabs.length === 1) {
    return <div className={styles.pageTabsSingle}>{tabs[0]}</div>;
  }

  return (
    <div className={styles.pageTabs}>
      <div className={styles.pageTabsBar} role="tablist">
        {labels.map((label, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === safeActive}
            className={`${styles.pageTabsTab} ${i === safeActive ? styles.pageTabsTabActive : ''}`}
            onClick={() => setActive(i)}>
            {label}
          </button>
        ))}
      </div>
      <div id={ids[safeActive] || undefined} className={styles.pageTabsPanel} role="tabpanel">
        {tabs[safeActive]}
      </div>
    </div>
  );
}
