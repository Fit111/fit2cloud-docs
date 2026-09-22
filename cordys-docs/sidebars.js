// @ts-check
// Cordys CRM 侧边栏(中文 label, 顺序与 mkdocs.yml nav 一致)
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  "cordys": [
    {
      "type": "doc",
      "id": "index",
      "label": "产品介绍",
      "key": "doc:产品介绍"
    },
    {
      "type": "doc",
      "id": "quick_start",
      "label": "快速入门",
      "key": "doc:快速入门"
    },
    {
      "type": "doc",
      "id": "changelog",
      "label": "更新日志",
      "key": "doc:更新日志"
    },
    {
      "type": "category",
      "label": "安装部署",
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "installation/offline_installtion",
          "label": "离线安装",
          "className": "sidebar-item-badge-rec",
          "key": "doc:安装部署/离线安装"
        },
        {
          "type": "doc",
          "id": "installation/online_installtion",
          "label": "在线安装",
          "key": "doc:安装部署/在线安装"
        },
        {
          "type": "doc",
          "id": "installation/1panel_installtion",
          "label": "1Panel 安装",
          "key": "doc:安装部署/1Panel 安装"
        },
        {
          "type": "doc",
          "id": "installation/win",
          "label": "Windows 安装",
          "key": "doc:安装部署/Windows 安装"
        },
        {
          "type": "doc",
          "id": "installation/aliyun",
          "label": "阿里云安装",
          "key": "doc:安装部署/阿里云安装"
        },
        {
          "type": "doc",
          "id": "installation/cli",
          "label": "命令行工具",
          "key": "doc:安装部署/命令行工具"
        },
        {
          "type": "doc",
          "id": "source_run",
          "label": "源码运行",
          "key": "doc:安装部署/源码运行"
        },
        {
          "type": "doc",
          "id": "installation/faq",
          "label": "安装常见问题",
          "key": "doc:安装部署/安装常见问题"
        }
      ],
      "key": "cat:安装部署"
    },
    {
      "type": "category",
      "label": "功能手册",
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "user_manual/sales_manage",
          "label": "销售流程管理",
          "key": "doc:功能手册/销售流程管理"
        },
        {
          "type": "doc",
          "id": "user_manual/product_entry",
          "label": "产品资料录入",
          "key": "doc:功能手册/产品资料录入"
        },
        {
          "type": "category",
          "label": "销售合同管理",
          "collapsed": true,
          "items": [
            {
              "type": "doc",
              "id": "user_manual/contract",
              "label": "合同",
              "key": "doc:功能手册/销售合同管理/合同"
            },
            {
              "type": "doc",
              "id": "user_manual/contractPaymentPlan",
              "label": "回款计划",
              "key": "doc:功能手册/销售合同管理/回款计划"
            },
            {
              "type": "doc",
              "id": "user_manual/contractPaymentRecord",
              "label": "回款记录",
              "key": "doc:功能手册/销售合同管理/回款记录"
            },
            {
              "type": "doc",
              "id": "user_manual/contractInvoice",
              "label": "发票记录",
              "key": "doc:功能手册/销售合同管理/发票记录"
            },
            {
              "type": "doc",
              "id": "user_manual/contractBusinessTitle",
              "label": "工商抬头",
              "key": "doc:功能手册/销售合同管理/工商抬头"
            }
          ],
          "key": "cat:功能手册/销售合同管理"
        },
        {
          "type": "doc",
          "id": "user_manual/order",
          "label": "销售订单管理",
          "key": "doc:功能手册/销售订单管理"
        },
        {
          "type": "category",
          "label": "系统设置",
          "collapsed": true,
          "items": [
            {
              "type": "doc",
              "id": "user_manual/org_manage",
              "label": "组织架构配置",
              "key": "doc:功能手册/系统设置/组织架构配置"
            },
            {
              "type": "doc",
              "id": "user_manual/role_permission",
              "label": "角色权限配置",
              "key": "doc:功能手册/系统设置/角色权限配置"
            },
            {
              "type": "doc",
              "id": "user_manual/form_config",
              "label": "业务表单配置",
              "key": "doc:功能手册/系统设置/业务表单配置"
            },
            {
              "type": "doc",
              "id": "user_manual/approval_flow",
              "label": "审批流配置",
              "key": "doc:功能手册/系统设置/审批流配置"
            }
          ],
          "key": "cat:功能手册/系统设置"
        },
        {
          "type": "category",
          "label": "企业协同配置",
          "collapsed": true,
          "items": [
            {
              "type": "doc",
              "id": "user_manual/wecom",
              "label": "企业微信集成配置",
              "key": "doc:功能手册/企业协同配置/企业微信集成配置"
            },
            {
              "type": "doc",
              "id": "user_manual/dingtalk",
              "label": "钉钉系统集成配置",
              "key": "doc:功能手册/企业协同配置/钉钉系统集成配置"
            },
            {
              "type": "doc",
              "id": "user_manual/lark",
              "label": "飞书系统集成配置",
              "key": "doc:功能手册/企业协同配置/飞书系统集成配置"
            }
          ],
          "key": "cat:功能手册/企业协同配置"
        },
        {
          "type": "doc",
          "id": "user_manual/mobile",
          "label": "移动端访问指南",
          "key": "doc:功能手册/移动端访问指南"
        },
        {
          "type": "category",
          "label": "BI 集成指南",
          "collapsed": true,
          "items": [
            {
              "type": "doc",
              "id": "user_manual/dataease",
              "label": "集成 DataEase 进行数据分析",
              "key": "doc:功能手册/BI 集成指南/集成 DataEase 进行数据分析"
            }
          ],
          "key": "cat:功能手册/BI 集成指南"
        },
        {
          "type": "category",
          "label": "Skills 集成指南",
          "collapsed": true,
          "items": [
            {
              "type": "doc",
              "id": "skill/workbuddy",
              "label": "集成到 WorkBuddy",
              "key": "doc:功能手册/Skills 集成指南/集成到 WorkBuddy"
            },
            {
              "type": "doc",
              "id": "skill/openclaw",
              "label": "集成到 OpenClaw",
              "key": "doc:功能手册/Skills 集成指南/集成到 OpenClaw"
            }
          ],
          "key": "cat:功能手册/Skills 集成指南"
        },
        {
          "type": "doc",
          "id": "mcp_server",
          "label": "MCP 服务开放",
          "key": "doc:功能手册/MCP 服务开放"
        }
      ],
      "key": "cat:功能手册"
    },
    {
      "type": "doc",
      "id": "trial",
      "label": "体验环境",
      "key": "doc:体验环境"
    },
    {
      "type": "doc",
      "id": "contact",
      "label": "联系我们",
      "key": "doc:联系我们"
    },
    {
      "type": "doc",
      "id": "enterprise",
      "label": "商业版本",
      "key": "doc:商业版本"
    }
  ]
};
export default sidebars;
