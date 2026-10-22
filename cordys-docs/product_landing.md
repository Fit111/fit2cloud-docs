---
title: Cordys CRM
description: Cordys CRM 产品文档导航页 —— 了解 Cordys CRM、进阶实战、运维开发资源与热门问题入口。
slug: /
hide_title: true
displayed_sidebar: cordys
toc_min_heading_level: 2
toc_max_heading_level: 2
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';
import styles from './product_landing.module.css';

{/* ===== Hero 区：左侧标题/简介/按钮，右侧视频卡片 ===== */}
<div className={styles.hero}>
  <h1 className={styles.heroTitle}>Cordys CRM</h1>
  <div className={styles.heroBody}>
    <p className={styles.heroDesc}>
      Cordys CRM 是新一代开源 AI CRM，集信息化、数字化、智能化于一体，
      帮助企业实现从线索到回款（L2C）的全流程精细化管理，
      覆盖线索获取、智能分配、客户与联系人管理、商机跟进、
      合同签约及回款执行，构建端到端的销售运营闭环。
    </p>
    <div className={styles.heroBtns}>
      {/* 顺序按设计稿：产品动态 → 下载安装 → 快速体验 → 如何购买 */}
      <Link className={styles.heroBtn} to="/cordys/changelog">产品动态</Link>
      <Link className={styles.heroBtn} to="https://community.fit2cloud.com/#/products/cordys-crm/downloads">下载安装</Link>
      <Link className={styles.heroBtn} to="https://demo.cordys.cn/">快速体验</Link>
      <Link className={styles.heroBtn} to="https://cordys.cn/pricing.html">如何购买</Link>
    </div>
  </div>
  {/* 产品介绍视频：封面为纯 CSS 品牌青底（取自 cordys.cn 官网主色）+ 白色镂空字标 + 主题词，
      右下角叠加播放标识（白底 + 品牌色三角），点击跳转 Cordys CRM 官方开源发布视频 */}
  <Link className={styles.videoCard} to="https://www.bilibili.com/video/BV1Wm1sB4ExL/">
    <span className={styles.videoCover}>
      <img
        className={styles.videoCoverLogo}
        src="/img/cordys/video/cordys-logo-white.png"
        alt="Cordys CRM"
      />
      <span className={styles.videoCoverText}>开源 AI CRM</span>
      <span className={styles.videoCoverPlay} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 5.8v12.4c0 .5.55.8.97.53l9.9-6.2a.62.62 0 0 0 0-1.06l-9.9-6.2A.62.62 0 0 0 7 5.8z" />
        </svg>
      </span>
    </span>
    <span className={styles.videoHint}>Cordys CRM · 02:03</span>
  </Link>
</div>

{/* ===== 分区 1：了解 Cordys CRM ===== */}
<div className={styles.section}>
  <div className={styles.sectionHead}>
    <span className={styles.sectionIcon}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    </span>

## 了解 Cordys CRM

  </div>
  <div className={styles.sectionBody}>
    <div className={styles.linkGridSingle}>
      <div className={styles.linkGroup}>
        <Link className={styles.groupTitle} to="/cordys/product-intro">产品介绍</Link>
        {/* 4 个短链接横排铺满分区宽度 */}
        <div className={styles.subLinkRow}>
          <Link className={styles.subLink} to="/cordys/product-intro">Cordys CRM 介绍</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/sales_manage">线索管理</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/customer_manage">客户管理</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/opportunity">商机管理</Link>
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
        {/* 与「了解 Cordys CRM」同一形式：分组标题 + 横排链接铺满分区宽度 */}
        <div className={styles.subLinkRow}>
          {/* 「安装部署」对齐侧栏「安装部署 → 离线安装」（带推荐角标）的入口 */}
          <Link className={styles.subLink} to="/cordys/installation/offline_installtion">安装部署</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/module_config">模块配置</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/sales_manage">线索管理</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/customer_manage">客户管理</Link>
        </div>
      </div>
      <div className={styles.linkGroup}>
        <span className={styles.groupLabel}>操作指南</span>
        {/* 前 6 条按 L2C 业务链路排（商机 → 合同 → 回款 → 发票 → 订单），后 6 条为通用能力 */}
        <div className={styles.subLinkRow}>
          <Link className={styles.subLink} to="/cordys/user_manual/opportunity">商机管理</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/contract">合同管理</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/contractPaymentPlan">回款计划</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/contractPaymentRecord">回款记录</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/contractInvoice">发票记录</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/order">订单管理</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/dashboard">仪表板</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/custom_form">自定义表单</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/approval_flow">审批流配置</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/import_export">导入导出</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/mobile">移动端</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/my_todo">我的待办</Link>
        </div>
      </div>
      <div className={styles.linkGroup}>
        <span className={styles.groupLabel}>最佳实践</span>
        {/* 本组为长标题文章，用自适应 2 列（见 .subLinkRowWide）避免折行 */}
        <div className={styles.subLinkRowWide}>
          <Link className={styles.subLink} to="https://cordys.cn/blog/fit2cloud-ai-crm-case-study.html">Cordys × WorkBuddy 赋能百人销售团队</Link>
          <Link className={styles.subLink} to="https://cordys.cn/blog/workbuddy-cordys-crm-skills-tutorial.html">Cordys CRM Skills 使用教程</Link>
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
        {/* 「查看系统日志」是服务端运行日志（ops），「系统日志」是系统内的操作审计日志
            （user_manual），两者为不同对象，故并列出现 */}
        <div className={styles.subLinkRow}>
          <Link className={styles.subLink} to="/cordys/ops/config_files">配置文件说明</Link>
          <Link className={styles.subLink} to="/cordys/ops/system_logs">查看系统日志</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/system_log">系统日志</Link>
          <Link className={styles.subLink} to="/cordys/installation/cli">命令行工具</Link>
          <Link className={styles.subLink} to="/cordys/source_run">源码运行</Link>
          <Link className={styles.subLink} to="/cordys/installation/faq">安装常见问题</Link>
        </div>
      </div>
      <div className={styles.linkGroup}>
        <span className={styles.groupLabel}>开发与集成</span>
        <div className={styles.subLinkRowWide}>
          <Link className={styles.subLink} to="/cordys/api_docs">API 文档</Link>
          <Link className={styles.subLink} to="/cordys/mcp_server">MCP 服务</Link>
          <Link className={styles.subLink} to="/cordys/skill/workbuddy">集成到 WorkBuddy</Link>
          <Link className={styles.subLink} to="/cordys/skill/openclaw">集成到 OpenClaw</Link>
          <Link className={styles.subLink} to="/cordys/user_manual/dataease">BI 集成指南</Link>
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
        <Link className={styles.subLink} to="/cordys/installation/faq#1-安装时找不到镜像报错">安装时找不到镜像报错怎么办？</Link>
        <Link className={styles.subLink} to="/cordys/installation/faq#2-成功安装后无法访问">成功安装后无法访问怎么办？</Link>
        <Link className={styles.subLink} to="/cordys/faq/community_faq#11-2核2g服务器能跑cordys-crm吗">2 核 2G 服务器能跑 Cordys CRM 吗？</Link>
        <Link className={styles.subLink} to="/cordys/faq/community_faq#12-离线部署时数据库在哪里">离线部署时数据库在哪里？</Link>
      </div>
    </div>
  </div>
</div>
