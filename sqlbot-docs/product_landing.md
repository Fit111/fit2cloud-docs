---
title: SQLBot 智能问数系统
description: SQLBot 产品文档导航页 —— 了解 SQLBot、进阶实战、运维开发资源与热门问题入口。
slug: /
hide_title: true
displayed_sidebar: sqlbot
toc_min_heading_level: 2
toc_max_heading_level: 2
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';
import styles from './product_landing.module.css';

{/* ===== Hero 区：左侧标题/简介/按钮，右侧视频卡片 ===== */}
<div className={styles.hero}>
  <h1 className={styles.heroTitle}>SQLBot 智能问数系统</h1>
  <div className={styles.heroBody}>
    <p className={styles.heroDesc}>
      SQLBot 是一款基于大语言模型（LLM）和 RAG（检索增强生成）的智能问数系统。用户以自然语言提问即可获得
      数据答案、SQL 语句与可视化图表，并可将结果组织成仪表板；借助工作空间实现资源隔离与细粒度数据权限，
      同时支持 Web 嵌入、弹窗嵌入与 MCP 调用，快速为 MaxKB、DataEase、Dify、n8n 等应用赋予智能问数能力。
    </p>
    <div className={styles.heroBtns}>
      {/* 顺序按设计稿：产品动态 → 下载安装 → 如何购买 */}
      <Link className={styles.heroBtn} to="/sqlbot/changelog">产品动态</Link>
      <Link className={styles.heroBtn} to="https://community.fit2cloud.com/#/products/sqlbot/downloads">下载安装</Link>
      <Link className={styles.heroBtn} to="https://www.fit2cloud.com/purchase/index.html">如何购买</Link>
    </div>
  </div>
  {/* 产品介绍视频：封面为纯 CSS 青蓝底（取自字标图标主色）+ 白色镂空 logo + 主题词，
      右下角叠加播放标识（白底 + 品牌色三角），点击跳转飞致云开源社区 B 站视频 */}
  <Link className={styles.videoCard} to="https://www.bilibili.com/video/BV1fNmgB1EYU/">
    <span className={styles.videoCover}>
      <img
        className={styles.videoCoverLogo}
        src="/img/sqlbot/video/sqlbot-logo-white.png"
        alt="SQLBot"
      />
      <span className={styles.videoCoverText}>智能问数即问即答</span>
      <span className={styles.videoCoverPlay} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 5.8v12.4c0 .5.55.8.97.53l9.9-6.2a.62.62 0 0 0 0-1.06l-9.9-6.2A.62.62 0 0 0 7 5.8z" />
        </svg>
      </span>
    </span>
    <span className={styles.videoHint}>飞致云开源社区 · 03:49</span>
  </Link>
</div>

{/* ===== 分区 1：了解 SQLBot ===== */}
<div className={styles.section}>
  <div className={styles.sectionHead}>
    <span className={styles.sectionIcon}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    </span>

## 了解 SQLBot

  </div>
  <div className={styles.sectionBody}>
    <div className={styles.linkGridSingle}>
      <div className={styles.linkGroup}>
        <Link className={styles.groupTitle} to="/sqlbot/product-intro">产品介绍</Link>
        {/* 4 个短链接横排铺满分区宽度 */}
        <div className={styles.subLinkRow}>
          <Link className={styles.subLink} to="/sqlbot/product-intro">SQLBot 介绍</Link>
          <Link className={styles.subLink} to="/sqlbot/user_manual/smart_question_description">智能问数</Link>
          <Link className={styles.subLink} to="/sqlbot/user_manual/dashboard_description">仪表板</Link>
          <Link className={styles.subLink} to="/sqlbot/user_manual/assistant">小助手应用</Link>
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
        <div className={styles.subLinkRow}>
          <Link className={styles.subLink} to="/sqlbot/installation/offline_installtion">安装部署</Link>
          <Link className={styles.subLink} to="/sqlbot/system/model">配置 AI 模型</Link>
          <Link className={styles.subLink} to="/sqlbot/user_manual/datasource_description">接入数据源</Link>
          <Link className={styles.subLink} to="/sqlbot/user_manual/smart_question_description">开始问数</Link>
        </div>
      </div>
      <div className={styles.linkGroup}>
        <span className={styles.groupLabel}>操作指南</span>
        <div className={styles.subLinkRow}>
          <Link className={styles.subLink} to="/sqlbot/user_manual/smart_question_description">智能问数</Link>
          <Link className={styles.subLink} to="/sqlbot/user_manual/dashboard_description">仪表板</Link>
          <Link className={styles.subLink} to="/sqlbot/user_manual/assistant">小助手应用</Link>
          <Link className={styles.subLink} to="/sqlbot/user_manual/professional">术语配置</Link>
          <Link className={styles.subLink} to="/sqlbot/user_manual/data_training">SQL 示例库</Link>
          <Link className={styles.subLink} to="/sqlbot/user_manual/member">成员管理</Link>
          <Link className={styles.subLink} to="/sqlbot/user_manual/permission">权限配置</Link>
          <Link className={styles.subLink} to="/sqlbot/system/workspace">工作空间</Link>
        </div>
      </div>
      <div className={styles.linkGroup}>
        <span className={styles.groupLabel}>最佳实践</span>
        {/* 本组条目为中英混排长句，用自适应 2 列（见 .subLinkRowWide）避免折行 */}
        <div className={styles.subLinkRowWide}>
          <Link className={styles.subLink} to="/sqlbot/best_practice#sqlbot的业务上下文配置能力">业务上下文配置能力</Link>
          <Link className={styles.subLink} to="/sqlbot/best_practice#sqlbot四步调优实现高效准确的nl-to-sql">四步调优提升 NL-to-SQL 准确率</Link>
          <Link className={styles.subLink} to="/sqlbot/dataease_integration">DataEase 接入 SQLBot</Link>
          <Link className={styles.subLink} to="/sqlbot/mcp_server#31-maxkb-集成示例">MaxKB V2 对接 SQLBot MCP</Link>
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
          <Link className={styles.subLink} to="/sqlbot/installation/cli">命令行工具</Link>
          <Link className={styles.subLink} to="/sqlbot/ops/config_files">配置文件说明</Link>
          <Link className={styles.subLink} to="/sqlbot/ops/system_logs">查看系统日志</Link>
          <Link className={styles.subLink} to="/sqlbot/installation/backup">备份还原</Link>
          <Link className={styles.subLink} to="/sqlbot/mcp_server">MCP 服务</Link>
          <Link className={styles.subLink} to="/sqlbot/embedding_integration">嵌入式对接</Link>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ===== 分区 4：热门问题 ===== */}
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
        <Link className={styles.subLink} to="https://kb.fit2cloud.com/?p=019b724a-4e4d-742c-8067-ca13c4394b79">MaxKB V2 对接 SQLBot MCP 常见问题解决</Link>
        <Link className={styles.subLink} to="/sqlbot/faq/datasource#2-数据源连接无效">数据源连接无效怎么办？</Link>
        <Link className={styles.subLink} to="/sqlbot/faq/smart_question_description#5--如何提升-sqlbot-问数的准确率">如何提升 SQLBot 问数的准确率？</Link>
        <Link className={styles.subLink} to="/sqlbot/faq/other#2-sqlbot-支持-api-调用吗">SQLBot 支持 API 调用吗？</Link>
      </div>
    </div>
  </div>
</div>
