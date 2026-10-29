/**
 * 自定义 navbar 项: 「一体机」下拉。
 *
 * 数据与文案对齐 https://www.fit2cloud.com/ 官网顶部「一体机」菜单(4 项, 全部跳官网外链)。
 * 结构与样式复用同目录 ProductDocs(条目 = logo 小图标 + 标题, 可选 NEW 徽标),
 * 保证导航栏里「开源产品」与「一体机」两个下拉视觉一致。
 *
 * 实现说明:
 * - 外层容器复用 theme 的全局下拉类(.navbar__item/.dropdown/.dropdown--hoverable/
 *   .dropdown__menu/.dropdown__link), hover 展开、菜单样式、链接高亮等原生行为无需手写。
 * - logo 图片在 static/img/logo/ 下, 亮/暗主题统一用彩色版。
 * - 全部为官网外链, 统一用 <a target="_blank"> 新窗口打开。
 */
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './ProductDocs.module.css';

// 「一体机」下拉的自有数据。
// 顺序、名称、跳转地址均以官网 https://www.fit2cloud.com/ 顶部菜单为准。
const APPLIANCES = [
  {
    id: '1panel-ai',
    name: '1Panel AI 一体机',
    link: 'https://1panel.cn/ai-appliance.html',
    logo: '1panel-07-蓝色.png',
    isNew: true, // 官网该项带 NEW 角标
  },
  {
    id: 'maxkb-ai',
    name: 'MaxKB AI 一体机',
    link: 'https://maxkb.cn/appliance',
    logo: 'MaxKB-03.png',
  },
  {
    id: 'jumpserver',
    name: 'JumpServer 一体机',
    link: 'https://jumpserver.org/hardware.html',
    logo: 'JumpServer-辅助图形-绿色.png',
  },
  {
    id: 'zabbix',
    name: 'Zabbix 信创一体机',
    link: 'https://www.fit2cloud.com/zabbix/index.html',
    logo: 'zabbix.png',
  },
];

function ApplianceItem({p, imgSrc}) {
  return (
    <a
      className={`${styles.link} dropdown__link`}
      href={p.link}
      target="_blank"
      rel="noopener noreferrer">
      <span className={styles.icon}>
        <img src={imgSrc(p.logo)} alt={p.name} loading="lazy" />
      </span>
      <span className={styles.text}>
        <span className={styles.name}>
          {p.name}
          {p.isNew ? <span className={styles.badge}>NEW</span> : null}
        </span>
      </span>
    </a>
  );
}

export default function Appliance() {
  const base = useBaseUrl('/img/logo/');
  // 文件名含中文/【】等字符, 统一 URL 编码, 避免路径里出现裸中文。
  const imgSrc = (name) => base + encodeURIComponent(name);

  return (
    <div className={`navbar__item dropdown dropdown--hoverable ${styles.container}`}>
      <a
        className={`navbar__link ${styles.trigger}`}
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false">
        一体机
        {/* 下拉箭头, 与「开源产品」一致 */}
        <svg
          className={styles.caretIcon}
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <ul className={`${styles.menu} dropdown__menu`}>
        {APPLIANCES.map((p) => (
          <li key={p.id}>
            <ApplianceItem p={p} imgSrc={imgSrc} />
          </li>
        ))}
      </ul>
    </div>
  );
}
