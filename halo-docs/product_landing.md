---
title: Halo
description: Halo 文档导航页 —— 安装部署、初始化站点，按主题浏览使用指南与开发者指南，以及在线 Demo、常见问题与社区入口。
slug: /
hide_title: true
displayed_sidebar: halo
toc_min_heading_level: 2
toc_max_heading_level: 2
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';
import styles from './product_landing.module.css';

{/* ===== Hero 区：左侧标题/简介/按钮，右侧视频卡片 ===== */}
<div className={styles.hero}>
  <h1 className={styles.heroTitle}>Halo</h1>
  <div className={styles.heroBody}>
    <p className={styles.heroDesc}>
      Halo 是一款强大易用的开源建站工具，可以通过丰富的主题和插件搭建任何类型的站点，从个人博客、企业官网到内容社区均可覆盖。这里汇集了安装部署、站点初始化、日常内容管理，以及主题与插件开发所需的全部文档。
    </p>
    <div className={styles.heroBtns}>
      {/* 顺序沿用其他产品落地页：产品动态 → 下载安装 → 快速体验 → 购买指南。
          「产品动态」即 Halo 版本发布站 releases.halo.run（左侧导航「其他」下的同名条目）；
          「购买指南」指向专业版/商业版的官方购买页（lxware.cn，带渠道码）。 */}
      <Link className={styles.heroBtn} to="https://releases.halo.run/">产品动态</Link>
      <Link className={styles.heroBtn} to="https://community.fit2cloud.com/#/products/halo/downloads">下载安装</Link>
      <Link className={styles.heroBtn} to="https://demo.halocms.site">快速体验</Link>
      <Link className={styles.heroBtn} to="https://www.lxware.cn/halo?code=mcYhwMkn">购买指南</Link>
    </div>
  </div>
  {/* 产品介绍视频：封面为纯 CSS 品牌蓝底（取自 Halo 字标蓝→深蓝渐变的均值）+ 白色镂空字标 + 主题词，
      右下角叠加播放标识，点击跳转凌霞实验室（Halo 官方）B 站视频《建站，一个 Halo 就够了！》，
      该视频链接挂在 halo.run 官网首页。 */}
  <Link className={styles.videoCard} to="https://www.bilibili.com/video/BV15x4y1U7RU/">
    <span className={styles.videoCover}>
      <img className={styles.videoCoverLogo} src="/img/halo/video/halo-logo-white.png" alt="Halo" />
      <span className={styles.videoCoverText}>开源建站工具</span>
      <span className={styles.videoCoverPlay} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 5.8v12.4c0 .5.55.8.97.53l9.9-6.2a.62.62 0 0 0 0-1.06l-9.9-6.2A.62.62 0 0 0 7 5.8z" />
        </svg>
      </span>
    </span>
    <span className={styles.videoHint}>Halo 官方 · 05:41</span>
  </Link>
</div>

{/* ===== 分区 1：立即体验 ===== */}
<div className={styles.section}>
  <div className={styles.sectionHead}>
    <span className={styles.sectionIcon}>

<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
</svg>

    </span>

## 立即体验

  </div>
  <div className={styles.sectionBody}>
    <div className={styles.linkGridSingle}>
      <div className={styles.linkGroup}>
        <span className={styles.groupTitle}>在线 Demo 环境</span>
        <span className={styles.groupDesc}>账号 demo，密码 P@ssw0rd123..，仅供功能体验，请勿上传或填写敏感信息。</span>
        <div className={styles.subLinkRow}>
          <Link className={styles.subLink} to="https://demo.halocms.site">演示站点 ↗</Link>
          <Link className={styles.subLink} to="https://demo.halocms.site/console">管理后台 ↗</Link>
        </div>
      </div>
      <div className={styles.linkGroup}>
        <span className={styles.groupTitle}>本地 Docker 运行</span>
        <div className={styles.subLinkRow}>
          <Link className={styles.subLink} to="/halo/guide/install/docker">Docker 部署</Link>
          <Link className={styles.subLink} to="/halo/guide/install/docker-compose">Docker Compose 部署</Link>
          <Link className={styles.subLink} to="/halo/guide/install/">完整安装文档</Link>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ===== 分区 2：快速开始 ===== */}
<div className={styles.section}>
  <div className={styles.sectionHead}>
    <span className={styles.sectionIcon}>

<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
</svg>

    </span>

## 快速开始

  </div>
  <div className={styles.sectionBody}>
    <div className={styles.linkGridSingle}>
      <div className={styles.linkGroup}>
        <span className={styles.groupTitle}>安装之后</span>
        <div className={styles.subLinkRow}>
          <Link className={styles.subLink} to="/halo/guide/setup">初始化站点</Link>
          <Link className={styles.subLink} to="/halo/guide/first-post">发布第一篇文章</Link>
          <Link className={styles.subLink} to="/halo/guide/use/backup">备份与恢复</Link>
          <Link className={styles.subLink} to="https://www.halo.run/store/apps">应用市场 ↗</Link>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ===== 分区 3：按主题浏览 ===== */}
<div className={styles.section}>
  <div className={styles.sectionHead}>
    <span className={styles.sectionIcon}>

<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <rect x="3" y="3" width="7" height="7" rx="1" />
  <rect x="14" y="3" width="7" height="7" rx="1" />
  <rect x="14" y="14" width="7" height="7" rx="1" />
  <rect x="3" y="14" width="7" height="7" rx="1" />
</svg>

    </span>

## 按主题浏览

  </div>
  <div className={styles.sectionBody}>
    <div className={styles.linkGridSingle}>
      <div className={styles.linkGroup}>
        <span className={styles.groupTitle}>使用 Halo</span>
        <div className={styles.subLinkRow}>
          <Link className={styles.subLink} to="/halo/guide/use/posts">文章</Link>
          <Link className={styles.subLink} to="/halo/guide/use/themes">主题</Link>
          <Link className={styles.subLink} to="/halo/guide/use/attachments">附件</Link>
          <Link className={styles.subLink} to="/halo/guide/use/plugins">插件</Link>
          <Link className={styles.subLink} to="/halo/guide/use/settings">站点设置</Link>
          <Link className={styles.subLink} to="/halo/guide/use/users">用户与权限</Link>
        </div>
      </div>
      <div className={styles.linkGroup}>
        <span className={styles.groupTitle}>开发与扩展</span>
        <div className={styles.subLinkRow}>
          <Link className={styles.subLink} to="/halo/developer-guide/plugin/introduction">插件开发</Link>
          <Link className={styles.subLink} to="/halo/developer-guide/theme/prepare">主题开发</Link>
          <Link className={styles.subLink} to="/halo/developer-guide/restful-api/introduction">RESTful API</Link>
          <Link className={styles.subLink} to="/halo/developer-guide/core/prepare">系统开发</Link>
          <Link className={styles.subLink} to="/halo/developer-guide/app-store/publish-app">发布应用</Link>
          <Link className={styles.subLink} to="/halo/developer-guide/form-schema">表单定义</Link>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ===== 分区 4：更多帮助 ===== */}
<div className={styles.section}>
  <div className={styles.sectionHead}>
    <span className={styles.sectionIcon}>

<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="4" />
  <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
  <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
  <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
  <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
</svg>

    </span>

## 更多帮助

  </div>
  <div className={styles.sectionBody}>
    <div className={styles.linkGridSingle}>
      <div className={styles.linkGroup}>
        <div className={styles.subLinkRow}>
          <Link className={styles.subLink} to="/halo/guide/faq">常见问题</Link>
          <Link className={styles.subLink} to="/halo/guide/install/config">安装配置说明</Link>
          <Link className={styles.subLink} to="/halo/guide/migrate-from-1.x">从 1.x 迁移</Link>
          <Link className={styles.subLink} to="https://bbs.halo.run">社区论坛 ↗</Link>
          <Link className={styles.subLink} to="https://github.com/orgs/halo-dev/discussions">GitHub 讨论区 ↗</Link>
        </div>
      </div>
    </div>
  </div>
</div>
