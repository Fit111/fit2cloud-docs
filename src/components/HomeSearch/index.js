import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useHistory} from '@docusaurus/router';
import {usePluginData} from '@docusaurus/useGlobalData';
import styles from './index.module.css';
import {buildIndex, searchDocs, I18N, MAX_RESULTS, searchUrlFor} from './search';
import ResultsPanel from './ResultsPanel';
import SearchBox from './SearchBox';

/* ------------------------------------------------------------------
 * 首页 Hero 搜索框 + 即时结果下拉面板
 *
 * 规格来源: Figma node 488-3119 / frame '交互'
 *   下拉面板 Frame 1564942: 与搜索框同宽 800, 距搜索框 8, 白底 r12, 内边距 27
 *   结果行  搜索内容 746x70, 行间距 8, hover/选中底 #f5f8ff r8
 *     文档图标 32x32(#b7bfd2 描边) | 标题 20/500 #6c7280 + 右侧 Tag
 *     Tag: 底 #edf0f1 r4, 文字 12/400 #323535, 高 24
 *     摘要 14/400 #6c7280, 单行省略
 *   底部「查看全部结果」14/400, 默认 #6c7280, hover #333eff
 *
 * 搜索逻辑(productOf/buildIndex/searchDocs)已抽到 ./search.js, 结果面板
 * 已抽到 ./ResultsPanel, 与导航栏 HomeNavbarSearch 共用。
 *
 * 【面板定位: position:fixed 的原因】
 *   Hero(.hero) 设了 overflow:hidden(用于裁剪大尺寸光晕), 若面板沿用
 *   position:absolute 沈出 Hero 底部, 会被 overflow:hidden 整个裁掉、
 *   只露出最上面一行(见 BUG: 搜索时看不到完整结果, 感觉被「全部产品」块挡住)。
 *   因此下面板用 createPortal 渲染到 <body> 并 position:fixed, 以搜索框的
 *   getBoundingClientRect 计算视口坐标, 彻底脱离 Hero 的裁切范围、浮在一切之上。
 * ------------------------------------------------------------------ */

export default function HomeSearch({zh, placeholder, submitLabel}) {
  const t = zh ? I18N.zh : I18N.en;
  const history = useHistory();
  // 文档索引由 plugins/home-search-index.js 在构建期注入 globalData
  const {items} = usePluginData('home-search-index');
  const index = useMemo(() => buildIndex(items), [items]);

  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  // 面板 position:fixed 的视口坐标; null 表示尚未测量
  const [rect, setRect] = useState(null);
  const wrapRef = useRef(null);
  const searchBoxRef = useRef(null);
  const panelRef = useRef(null);

  const results = useMemo(() => searchDocs(index, query), [index, query]);
  const visible = open && query.trim().length > 0;
  const rows = results.slice(0, MAX_RESULTS);
  const searchUrl = searchUrlFor(query);

  const go = useCallback(
    (url) => {
      setOpen(false);
      history.push(url);
    },
    [history],
  );

  /* 测量搜索框在视口内的位置, 供 fixed 面板对齐。
     width 锁到搜索框宽度(wrap 里 800/max-width 100%), 这样面板与输入框等宽。 */
  const updatePos = useCallback(() => {
    const el = searchBoxRef.current;
    if (!el) {
      return;
    }
    const r = el.getBoundingClientRect();
    if (r.width === 0) {
      return;
    }
    setRect({
      top: r.bottom + 8,
      left: r.left,
      width: r.width,
    });
  }, []);

  // 面板打开时: 测一次位置, 并挂在 scroll/resize 上跟随(滚动时搜索框会移动)
  useEffect(() => {
    if (!visible) {
      return undefined;
    }
    updatePos();
    window.addEventListener('resize', updatePos);
    // capture=true 捕获 Hero 内部乃至任意祖先的滚动, 都能让面板跟着搜索框走
    document.addEventListener('scroll', updatePos, true);
    return () => {
      window.removeEventListener('resize', updatePos);
      document.removeEventListener('scroll', updatePos, true);
    };
  }, [visible, updatePos]);

  // 点击面板外部关闭(面板在 body 上, 需同时判断 wrap 与 portal 面板)
  useEffect(() => {
    if (!visible) {
      return undefined;
    }
    const onPointerDown = (e) => {
      const inWrap = wrapRef.current && wrapRef.current.contains(e.target);
      const inPanel = panelRef.current && panelRef.current.contains(e.target);
      if (!inWrap && !inPanel) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [visible]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (active >= 0 && rows[active]) {
      go(rows[active].permalink);
      return;
    }
    go(searchUrl);
  };

  const onKeyDown = (e) => {
    if (!visible || rows.length === 0) {
      if (e.key === 'Escape') {
        setOpen(false);
      }
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => (i + 1) % rows.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => (i <= 0 ? rows.length - 1 : i - 1));
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const panel = visible ? (
    <ResultsPanel
      rect={rect}
      rows={rows}
      query={query}
      active={active}
      emptyText={t.empty}
      viewAllText={t.viewAll}
      searchUrl={searchUrl}
      onOpen={setActive}
      onNavigate={go}
      panelRef={panelRef}
    />
  ) : null;

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <SearchBox
        value={query}
        placeholder={placeholder}
        submitLabel={submitLabel}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
          setActive(-1);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        onSubmit={onSubmit}
        boxRef={searchBoxRef}
      />
      {panel}
    </div>
  );
}
