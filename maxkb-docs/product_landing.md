---
title: MaxKB 智能体平台
description: MaxKB 产品文档导航页 —— 了解 MaxKB、进阶实战、运维开发资源与热门问题入口。
slug: /
hide_title: true
displayed_sidebar: maxkb
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
    <h1 className={styles.heroTitle}>MaxKB 智能体平台</h1>
    <p className={styles.heroDesc}>
      MaxKB = Max Knowledge Brain，是一款强大易用的企业级智能体平台，致力于解决企业 AI
      落地面临的技术门槛高、部署成本高、迭代周期长等问题。秉承“开箱即用，伴随成长”的设计理念，
      支持快速接入主流大模型、高效构建专属知识库，提供从知识问答（RAG）、
      流程自动化（Workflow）到智能体（Agent）的渐进式升级路径，
      赋能智能客服、智慧办公等场景。
    </p>
    <div className={styles.heroBtns}>
      {/* 顺序按设计稿：产品动态 → 下载安装 → 快速体验 → 如何购买 */}
      <Link className={styles.heroBtn} to="/maxkb/changelog">产品动态</Link>
      <Link className={styles.heroBtn} to="https://community.fit2cloud.com/#/products/maxkb/downloads">下载安装</Link>
      <Link className={styles.heroBtn} to="https://apps.fit2cloud.com/maxkb">快速体验</Link>
      <Link className={styles.heroBtn} to="https://maxkb.cn/price">如何购买</Link>
    </div>
  </div>
  {/* 产品介绍视频：封面为纯 CSS 品牌紫蓝底（取自横向字标实测均值）+ 白色镂空字标 + 主题词，
      右下角叠加播放标识（白底 + 品牌色三角），点击跳转 MaxKB 官方介绍视频 */}
  <Link className={styles.videoCard} to="https://www.bilibili.com/video/BV1vpamzREeS/">
    <span className={styles.videoCover}>
      <img
        className={styles.videoCoverLogo}
        src="/img/maxkb/video/maxkb-logo-white.png"
        alt="MaxKB"
      />
      <span className={styles.videoCoverText}>企业级智能体平台</span>
      <span className={styles.videoCoverPlay} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 5.8v12.4c0 .5.55.8.97.53l9.9-6.2a.62.62 0 0 0 0-1.06l-9.9-6.2A.62.62 0 0 0 7 5.8z" />
        </svg>
      </span>
    </span>
    <span className={styles.videoHint}>MaxKB · 02:30</span>
  </Link>
</div>

{/* ===== 分区 1：了解 MaxKB ===== */}
<div className={styles.section}>
  <div className={styles.sectionHead}>
    <span className={styles.sectionIcon}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    </span>

## 了解 MaxKB

  </div>
  <div className={styles.sectionBody}>
    <div className={styles.linkGridSingle}>
      <div className={styles.linkGroup}>
        <Link className={styles.groupTitle} to="/maxkb/product-intro">产品介绍</Link>
        {/* 4 个短链接横排铺满分区宽度 */}
        <div className={styles.subLinkRow}>
          <Link className={styles.subLink} to="/maxkb/product-intro">MaxKB 介绍</Link>
          {/* 注意：dataset/dataset.md、app/app.md 的文件名与父目录同名，
              Docusaurus 会把 slug 折叠为目录路径（/maxkb/user_manual/dataset/、
              /maxkb/user_manual/app/），必须带尾斜杠，写 /dataset/dataset 会 404 */}
          <Link className={styles.subLink} to="/maxkb/user_manual/dataset/">知识库</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/app/">智能体</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/dataset/workflow">工作流</Link>
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
        {/* 与「了解 MaxKB」同一形式：分组标题 + 横排链接铺满分区宽度 */}
        <div className={styles.subLinkRow}>
          {/* 「安装部署」对齐侧栏「安装部署 → 离线安装」（带推荐角标）的入口 */}
          <Link className={styles.subLink} to="/maxkb/installation/offline_installtion">安装部署</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/model/model_summary">模型对接</Link>
          {/* 「知识库构建」指「知识库」功能页（含通用型 / Web 站点 / 工作流三种建库方式）；
              与操作指南的「知识库管理」共用同一页面，分别为入门建库与日常管理两个入口 */}
          <Link className={styles.subLink} to="/maxkb/user_manual/dataset/">知识库构建</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/app/simple_app">智能体创建</Link>
        </div>
      </div>
      <div className={styles.linkGroup}>
        <span className={styles.groupLabel}>操作指南</span>
        {/* 前 8 条为社区版功能操作，后 4 条为企业版的管理与权限配置，
            均属「打开界面就能操作」的日常动作，故并入同一分组 */}
        <div className={styles.subLinkRow}>
          <Link className={styles.subLink} to="/maxkb/user_manual/dataset/">知识库管理</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/dataset/doclist">文档分段</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/dataset/hit-testing">命中测试</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/dataset/workflow">工作流编排</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/tool/">工具与函数库</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/trigger/">触发器</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/app/log">对话日志</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/email">系统设置</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/X-Pack/user">用户管理</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/X-Pack/workspace">工作空间</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/X-Pack/authorization_resources">资源授权</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/X-Pack/operation_log">操作日志</Link>
        </div>
      </div>
      <div className={styles.linkGroup}>
        <span className={styles.groupLabel}>最佳实践</span>
        {/* 本组条目为中英混排长句或超长中文，用自适应 2 列（见 .subLinkRowWide）避免折行 */}
        <div className={styles.subLinkRowWide}>
          <Link className={styles.subLink} to="/maxkb/Skills/MaxKB_Skills">基于 MaxKB Skills 的 AI 智能体运维</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/workbuddy_maxkb_skills">WorkBuddy + MaxKB 技能</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/choose_model_dataset">问答页面自主选择模型或知识库</Link>
          <Link className={styles.subLink} to="/maxkb/faq/doc_segment">知识库文档如何合理分段</Link>
          <Link className={styles.subLink} to="/maxkb/faq/wps_contract_review">WPS 合同审核助手的设计与实现</Link>
          <Link className={styles.subLink} to="/maxkb/faq/maxkb_multimodal_workflow">图音视多模态知识库工作流</Link>
          <Link className={styles.subLink} to="/maxkb/faq/maxkb_In_halo">将 MaxKB 小助手集成到 Halo</Link>
          <Link className={styles.subLink} to="/maxkb/faq/Offline_install_OllamaModel">Ollama 离线部署 LLM 模型</Link>
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
          <Link className={styles.subLink} to="/maxkb/ops/config_files">配置文件说明</Link>
          <Link className={styles.subLink} to="/maxkb/ops/system_logs">查看系统日志</Link>
          <Link className={styles.subLink} to="/maxkb/installation/cli">命令行工具</Link>
          <Link className={styles.subLink} to="/maxkb/installation/backup">备份还原</Link>
          <Link className={styles.subLink} to="/maxkb/installation/migrate">迁移工具</Link>
          <Link className={styles.subLink} to="/maxkb/system_arch">系统架构</Link>
        </div>
      </div>
      <div className={styles.linkGroup}>
        <span className={styles.groupLabel}>开发与集成</span>
        {/* 本组三条为企业版的对外集成能力，一条为 API 调用实践，均为长条目 → 自适应 2 列 */}
        <div className={styles.subLinkRowWide}>
          <Link className={styles.subLink} to="/maxkb/user_manual/X-Pack/system_API">系统 API</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/chat_to_API">通过 API Key 调用对话</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/X-Pack/app_integrate">嵌入第三方系统</Link>
          <Link className={styles.subLink} to="/maxkb/user_manual/X-Pack/login_auth">单点登录</Link>
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
        <Link className={styles.subLink} to="https://kb.fit2cloud.com/?p=9e0b3ed6-7e5c-4ace-b93d-8917b9812d07">MaxKB 中如何选择向量模型？</Link>
        <Link className={styles.subLink} to="/maxkb/faq/knowledge_base#2-上传文档向量化后字符数为-0">上传文档向量化后字符数为 0 怎么办？</Link>
        <Link className={styles.subLink} to="/maxkb/faq/knowledge_base#1-智能分段效果不理想">知识库智能分段效果不理想怎么调？</Link>
        <Link className={styles.subLink} to="/maxkb/faq/function_library#1-函数库运行后提示缺少依赖">函数库运行后提示缺少依赖怎么办？</Link>
      </div>
    </div>
  </div>
</div>
