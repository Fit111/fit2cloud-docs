// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  metersphere: [
    // ── 根目录：概览 / 产品介绍 / 架构 / 快速入门 / 更新日志 ──
    { type: "doc", id: "product_landing", label: "概览" },
    { type: "doc", id: "index", label: "产品介绍" },
    { type: "doc", id: "system_arch", label: "系统架构" },

    // ── quick_start：快速入门 ──
    {
      type: "category",
      label: "快速入门",
      collapsed: false,
      items: [
        { type: "doc", id: "quick_start/test_case", label: "使用用例管理" },
        { type: "doc", id: "quick_start/api_test", label: "使用接口测试" },
      ],
    },

    { type: "doc", id: "about/changelog", label: "更新日志" },
    {
      type: "link",
      label: "版本对比",
      href: "https://metersphere.io/v3/pricing.html",
    },

    // ── installation：安装部署 ──
    {
      type: "category",
      label: "安装部署",
      collapsed: false,
      items: [
        { type: "doc", id: "installation/network_port", label: "网络端口要求" },
        { type: "doc", id: "installation/offline_installation", label: "离线安装", className: "sidebar-item-badge-rec" },
        { type: "doc", id: "installation/online_installation", label: "在线安装" },
        { type: "doc", id: "installation/1Panel", label: "1Panel 安装" },
        { type: "doc", id: "installation/aliyun", label: "云市场部署" },
        { type: "doc", id: "installation/installation_k8s", label: "Kubernetes 部署" },
        { type: "doc", id: "installation/offline_installation_windows", label: "Windows 离线安装" },
        { type: "doc", id: "installation/task_runner", label: "Task Runner 部署" },
        { type: "doc", id: "installation/backup_data", label: "数据备份与还原" },
        { type: "doc", id: "installation/cli", label: "命令行工具" },
      ],
    },

    // ── user_manual：功能手册 ──
    {
      type: "category",
      label: "功能手册",
      collapsed: false,
      items: [
        { type: "doc", id: "video_index", label: "教学视频" },
        { type: "doc", id: "user_manual/general", label: "通用功能" },

        {
          type: "category",
          label: "工作台",
          items: [
            { type: "doc", id: "user_manual/workstation/index", label: "首页" },
            { type: "doc", id: "user_manual/workstation/todo", label: "我的待办" },
            { type: "doc", id: "user_manual/workstation/focus", label: "我关注的" },
            { type: "doc", id: "user_manual/workstation/create", label: "我创建的" },
          ],
        },

        {
          type: "category",
          label: "项目管理",
          items: [
            { type: "doc", id: "user_manual/project_management/overview", label: "概述", key: "project-management-overview" },
            { type: "doc", id: "user_manual/project_management/project_permissions", label: "项目与权限" },
            { type: "doc", id: "user_manual/project_management/template_management", label: "模板管理" },
            { type: "doc", id: "user_manual/project_management/file_management", label: "文件管理" },
            { type: "doc", id: "user_manual/project_management/message_management", label: "消息管理" },
            { type: "doc", id: "user_manual/project_management/public_script", label: "公共脚本" },
            { type: "doc", id: "user_manual/project_management/environment", label: "环境管理" },
            { type: "doc", id: "user_manual/project_management/log", label: "日志" },
          ],
        },

        {
          type: "category",
          label: "测试计划",
          items: [
            { type: "doc", id: "user_manual/test_plan/intro", label: "概述", key: "test-plan-overview" },
            { type: "doc", id: "user_manual/test_plan/test_plan", label: "计划" },
            { type: "doc", id: "user_manual/test_plan/test_plan_report", label: "报告", key: "test-plan-report" },
          ],
        },

        {
          type: "category",
          label: "测试用例",
          items: [
            { type: "doc", id: "user_manual/test_case/intro", label: "概述", key: "test-case-overview" },
            { type: "doc", id: "user_manual/test_case/test_case", label: "用例" },
            { type: "doc", id: "user_manual/test_case/test_case_review", label: "评审" },
          ],
        },

        {
          type: "category",
          label: "接口测试",
          items: [
            { type: "doc", id: "user_manual/api_test/intro", label: "概述", key: "api-test-overview" },
            { type: "doc", id: "user_manual/api_test/debug", label: "接口调试" },
            { type: "doc", id: "user_manual/api_test/api_definition", label: "接口定义" },
            { type: "doc", id: "user_manual/api_test/request_params", label: "请求参数介绍" },
            { type: "doc", id: "user_manual/api_test/api_automation", label: "场景管理" },
            { type: "doc", id: "user_manual/api_test/functions", label: "内置函数" },
            { type: "doc", id: "user_manual/api_test/test_report", label: "报告", key: "api-test-report" },
          ],
        },

        {
          type: "category",
          label: "缺陷管理",
          items: [
            { type: "doc", id: "user_manual/defect_management/overview", label: "概述", key: "defect-management-overview" },
            { type: "doc", id: "user_manual/defect_management/defect_management", label: "缺陷管理" },
          ],
        },

        {
          type: "category",
          label: "系统设置",
          items: [
            { type: "doc", id: "user_manual/system_management/intro", label: "概述", key: "system-settings-overview" },
            { type: "doc", id: "user_manual/system_management/system", label: "系统" },
            { type: "doc", id: "user_manual/system_management/organization", label: "组织", key: "system-organization" },
          ],
        },

        {
          type: "category",
          label: "个人中心",
          items: [{ type: "doc", id: "user_manual/personal_center/information", label: "个人信息" }],
        },

        {
          type: "category",
          label: "X-Pack",
          items: [
            { type: "doc", id: "user_manual/x-pack/intro", label: "概述", key: "xpack-overview" },
            { type: "doc", id: "user_manual/x-pack/organization", label: "组织", key: "xpack-organization" },
            { type: "doc", id: "user_manual/x-pack/custom_theme", label: "自定义主题" },
            {
              type: "category",
              label: "单点认证",
              items: [
                { type: "doc", id: "user_manual/x-pack/work_weixin", label: "企业微信" },
                { type: "doc", id: "user_manual/x-pack/dingding", label: "钉钉" },
                { type: "doc", id: "user_manual/x-pack/feishu", label: "飞书" },
                { type: "doc", id: "user_manual/x-pack/cas", label: "CAS" },
                { type: "doc", id: "user_manual/x-pack/oidc", label: "OIDC" },
                { type: "doc", id: "user_manual/x-pack/oauth2", label: "OAuth2.0" },
                { type: "doc", id: "user_manual/x-pack/ldap", label: "LDAP" },
              ],
            },
            { type: "doc", id: "user_manual/x-pack/message", label: "消息模板" },
            { type: "doc", id: "user_manual/x-pack/controller", label: "资源池" },
          ],
        },
      ],
    },

    // ── 插件 ──
    { type: "doc", id: "plugin", label: "插件列表" },

    // ── ask_question：常见问题 ──
    {
      type: "category",
      label: "常见问题",
      collapsed: false,
      items: [
        { type: "doc", id: "ask_question/install_question", label: "安装部署" },
        { type: "doc", id: "ask_question/api_question", label: "接口测试" },
        { type: "doc", id: "ask_question/ai_service", label: "如何接入 AI" },
      ],
    },

    // ── dev_manual：开发文档 ──
    {
      type: "category",
      label: "开发文档",
      collapsed: false,
      items: [
        { type: "doc", id: "dev_manual/dev_manual", label: "开发环境搭建" },
        { type: "doc", id: "dev_manual/api_plugin_dev", label: "接口自动化插件开发" },
        { type: "doc", id: "dev_manual/platform_plugin_dev", label: "第三方平台插件开发" },
        { type: "doc", id: "dev_manual/script_json", label: "插件脚本示例" },
      ],
    },

    // ── 最佳实践 / 联系我们（顶层）──
    { type: "doc", id: "case_studies/user_cases", label: "最佳实践" },
    { type: "doc", id: "about/contact", label: "联系我们" },
  ],
};

export default sidebars;
