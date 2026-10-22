---
title: 1Panel AI 网关
description: 1Panel AI 网关产品文档导航页 —— 了解产品、实践指南、运维资源与常见问题入口。
slug: /
hide_title: true
displayed_sidebar: aiGateway
toc_min_heading_level: 2
toc_max_heading_level: 2
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';
import styles from './product_landing.module.css';

{/* ===== Hero 区：左侧标题/简介/按钮，右侧视频卡片 ===== */}
<div className={styles.hero}>
  <div className={styles.heroLeft}>
    <h1 className={styles.heroTitle}>1Panel AI 网关</h1>
    <p className={styles.heroDesc}>
      1Panel AI 网关是面向企业 AI 应用的一站式统一接入与治理平台。业务系统只需配置统一的
      Base URL 与网关发放的 API Key，即可调用 OpenAI、Anthropic 及本地化部署的各类模型；
      平台通过账号池、智能路由与并发控制保障调用稳定，并以席位配额、内容合规和用量统计
      实现成本与风险的集中管控，让企业 AI 落地更安全、更高效、更可控。
    </p>
    <div className={styles.heroBtns}>
      <Link className={styles.heroBtn} to="/ai-gateway/changelog">产品动态</Link>
      <Link className={styles.heroBtn} to="https://community.fit2cloud.com/#/products/1panel-ai-gateway/downloads">下载安装</Link>
      <Link className={styles.heroBtn} to="https://1panel.cn/enterprise.html">如何购买</Link>
    </div>
  </div>
  {/* 产品介绍视频：封面为纯 CSS 品牌蓝底（取自字标亮面 #005EEB）+ 白色镂空 logo + 主题词，
      右下角叠加播放标识（白底 + 品牌色三角），点击跳转 B 站「1Panel AI 网关使用教程」 */}
  <Link className={styles.videoCard} to="https://www.bilibili.com/video/BV1WeHD6BEVH/">
    <span className={styles.videoCover}>
      <img
        className={styles.videoCoverLogo}
        src="/img/ai-gateway/video/ai-gateway-logo-white.png"
        alt="1Panel AI 网关"
      />
      <span className={styles.videoCoverText}>统一接入与治理</span>
      <span className={styles.videoCoverPlay} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 5.8v12.4c0 .5.55.8.97.53l9.9-6.2a.62.62 0 0 0 0-1.06l-9.9-6.2A.62.62 0 0 0 7 5.8z" />
        </svg>
      </span>
    </span>
    <span className={styles.videoHint}>1Panel · 03:47</span>
  </Link>
</div>

{/* ===== 分区 1：了解 1Panel AI 网关 ===== */}
<div className={styles.section}>
  <div className={styles.sectionHead}>
    <span className={styles.sectionIcon}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    </span>

## 了解 1Panel AI 网关

  </div>
  <div className={styles.sectionBody}>
    <div className={styles.linkGridSingle}>
      <div className={styles.linkGroup}>
        <Link className={styles.groupTitle} to="/ai-gateway/product-intro">产品介绍</Link>
        {/* 3 个短链接横排（沿用 4 列网格，保证与下方各分组的列位对齐） */}
        {/* 注意：integrate_third_party.md 的 frontmatter 写作 slug: /ai-gateway/integrate-third-party，
            而 Docusaurus 的 slug 是相对 routeBasePath 解析的，线上路径因此被拼成
            /ai-gateway/ai-gateway/integrate-third-party。落地页必须用这条真实路径，写单段前缀会 404。
            待该页 slug 修正为 /integrate-third-party 并补 301 重定向后，这里再统一改回。 */}
        <div className={styles.subLinkRow}>
          <Link className={styles.subLink} to="/ai-gateway/product-intro">1Panel AI 网关介绍</Link>
          <Link className={styles.subLink} to="/ai-gateway/end‑user-manual/model-square">模型广场</Link>
          <Link className={styles.subLink} to="/ai-gateway/ai-gateway/integrate-third-party">接入第三方</Link>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ===== 分区 2：进阶实战 ===== */}
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

## 进阶实战

  </div>
  <div className={styles.sectionBody}>
    <div className={styles.linkGridSingle}>
      <div className={styles.linkGroup}>
        <span className={styles.groupLabel}>快速入门</span>
        {/* 「安装部署」对齐侧栏「安装部署 → 离线安装」（带推荐角标）的入口 */}
        <div className={styles.subLinkRow}>
          <Link className={styles.subLink} to="/ai-gateway/installation/offline_installation">安装部署</Link>
          {/* 「快速上手」指向快速入门页内的「3 快速上手」章节（管理员配置全流程），
              与「安装部署」构成「先装、后配」的两步入口，不再单列在线安装 / 1Panel 安装
              （这两种部署方式在「部署说明」中并列介绍）；「接入第三方」已上移到「了解」分区 */}
          <Link className={styles.subLink} to="/ai-gateway/quick_start#3-快速上手">快速上手</Link>
        </div>
      </div>
      <div className={styles.linkGroup}>
        <span className={styles.groupLabel}>操作指南</span>
        <div className={styles.subLinkRow}>
          <Link className={styles.subLink} to="/ai-gateway/admin-user-manual/account_pool">账号池</Link>
          <Link className={styles.subLink} to="/ai-gateway/admin-user-manual/model_group">模型组</Link>
          {/* 「用户」与「用户组」两篇正文分开，落地页合成一条，入口取「用户」 */}
          <Link className={styles.subLink} to="/ai-gateway/admin-user-manual/user">用户与用户组</Link>
          <Link className={styles.subLink} to="/ai-gateway/admin-user-manual/smart_route">智能路由</Link>
          <Link className={styles.subLink} to="/ai-gateway/admin-user-manual/content_compliance">内容合规</Link>
          <Link className={styles.subLink} to="/ai-gateway/user_manual/ai_gateway/call_logs">调用日志</Link>
          <Link className={styles.subLink} to="/ai-gateway/admin/ai_gateway/usage_statistics">用量统计</Link>
          <Link className={styles.subLink} to="/ai-gateway/user_manual/ai_gateway/settings">网关设置</Link>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ===== 分区 3：运维开发资源 ===== */}
<div className={styles.section}>
  <div className={styles.sectionHead}>
    <span className={styles.sectionIcon}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    </span>

## 运维开发资源

  </div>
  <div className={styles.sectionBody}>
    <div className={styles.linkGridSingle}>
      <div className={styles.linkGroup}>
        <span className={styles.groupLabel}>运维与安全</span>
        <div className={styles.subLinkRow}>
          <Link className={styles.subLink} to="/ai-gateway/ops/config_files">配置文件说明</Link>
          <Link className={styles.subLink} to="/ai-gateway/ops/system_logs">查看系统日志</Link>
          <Link className={styles.subLink} to="/ai-gateway/installation/cli">1gctl 命令行工具</Link>
          <Link className={styles.subLink} to="/ai-gateway/user_manual/ai_gateway/system_settings">系统设置</Link>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ===== 分区 4：热门问题 =====
     当前「常见问题」分类仅 1 篇（重置管理员密码），其余条目暂时指向对应功能正文；
     后续补齐 FAQ 后请替换为真实 FAQ 链接与问句文案。 */}
<div className={styles.section}>
  <div className={styles.sectionHead}>
    <span className={styles.sectionIcon}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    </span>

## 热门问题

  </div>
  <div className={styles.sectionBody}>
    <div className={styles.linkGridSingle}>
      <div className={styles.linkGroup}>
        <Link className={styles.subLink} to="/ai-gateway/faq/reset-admin-password">忘记管理员密码怎么办？</Link>
        <Link className={styles.subLink} to="/ai-gateway/ai-gateway/integrate-third-party">业务系统如何接入 AI 网关？</Link>
        <Link className={styles.subLink} to="/ai-gateway/user_manual/ai_gateway/call_logs">调用异常如何排查？</Link>
        <Link className={styles.subLink} to="/ai-gateway/admin-user-manual/content_compliance">请求命中内容合规规则后如何处理？</Link>
        <Link className={styles.subLink} to="/ai-gateway/contact">如何联系我们？</Link>
      </div>
    </div>
  </div>
</div>
