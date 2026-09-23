// @ts-check
// Cordys CRM 侧边栏（按 JumpServer 的分层结构整理，保持现有文档不变）
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
      "type": "link",
      "label": "购买指南",
      "href": "https://cordys.cn/pricing.html",
      "key": "link:购买指南"
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
      "label": "使用手册",
      "collapsed": true,
      "items": [
        {
          "type": "category",
          "label": "通用功能",
          "collapsed": true,
          "items": [
            {
              "type": "category",
              "label": "首页概览",
              "collapsed": true,
              "items": [
                {
                  "type": "doc",
                  "id": "user_manual/global_search",
                  "label": "全局搜索",
                  "key": "doc:功能手册/通用功能/首页概览/全局搜索"
                },
                {
                  "type": "doc",
                  "id": "user_manual/followup_plan",
                  "label": "跟进记录计划",
                  "key": "doc:功能手册/通用功能/首页概览/跟进记录计划"
                },
                {
                  "type": "doc",
                  "id": "user_manual/language_switch",
                  "label": "中英文切换",
                  "key": "doc:功能手册/通用功能/首页概览/中英文切换"
                },
                {
                  "type": "doc",
                  "id": "user_manual/help_docs",
                  "label": "帮助文档",
                  "key": "doc:功能手册/通用功能/首页概览/帮助文档"
                },
                {
                  "type": "doc",
                  "id": "user_manual/reminder",
                  "label": "提醒",
                  "key": "doc:功能手册/通用功能/首页概览/提醒"
                },
                {
                  "type": "doc",
                  "id": "user_manual/my_todo",
                  "label": "我的待办",
                  "key": "doc:功能手册/通用功能/首页概览/我的待办"
                }
              ],
              "key": "cat:功能手册/通用功能/首页概览"
            }
          ],
          "key": "cat:功能手册/通用功能"
        },
        {
          "type": "category",
          "label": "管理手册",
          "collapsed": true,
          "items": [
            {
              "type": "category",
              "label": "系统配置",
              "collapsed": true,
              "items": [
                {
                  "type": "doc",
                  "id": "user_manual/org_manage",
                  "label": "组织架构管理",
                  "key": "doc:功能手册/管理手册/系统配置/组织架构管理"
                },
                {
                  "type": "doc",
                  "id": "user_manual/role_permission",
                  "label": "角色权限管理",
                  "key": "doc:功能手册/管理手册/系统配置/角色权限管理"
                },
                {
                  "type": "doc",
                  "id": "user_manual/module_config",
                  "label": "模块配置管理",
                  "key": "doc:功能手册/管理手册/系统配置/模块配置管理"
                },
                {
                  "type": "doc",
                  "id": "user_manual/message_setting",
                  "label": "消息设置管理",
                  "key": "doc:功能手册/管理手册/系统配置/消息设置管理"
                },
                {
                  "type": "doc",
                  "id": "user_manual/workflow_setting",
                  "label": "流程设置管理",
                  "key": "doc:功能手册/管理手册/系统配置/流程设置管理"
                },
                {
                  "type": "doc",
                  "id": "user_manual/enterprise_setting",
                  "label": "企业设置管理",
                  "key": "doc:功能手册/管理手册/系统配置/企业设置管理"
                },
                {
                  "type": "doc",
                  "id": "user_manual/system_log",
                  "label": "系统日志管理",
                  "key": "doc:功能手册/管理手册/系统配置/系统日志管理"
                }
              ],
              "key": "cat:功能手册/管理手册/系统配置"
            },
            {
              "type": "doc",
              "id": "user_manual/form_config",
              "label": "自定义表单",
              "key": "doc:功能手册/管理手册/自定义表单"
            },
            {
              "type": "doc",
              "id": "user_manual/product_entry",
              "label": "产品",
              "key": "doc:功能手册/管理手册/产品"
            },
            {
              "type": "doc",
              "id": "user_manual/dashboard",
              "label": "仪表板",
              "key": "doc:功能手册/管理手册/仪表板"
            }
          ],
          "key": "cat:功能手册/管理手册"
        },
        {
          "type": "category",
          "label": "普通用户手册",
          "collapsed": true,
          "items": [
            {
              "type": "doc",
              "id": "user_manual/identity",
              "label": "标识",
              "key": "doc:功能手册/通用用户手册/标识"
            },
            {
              "type": "doc",
              "id": "user_manual/sales_manage",
              "label": "线索管理",
              "key": "doc:功能手册/通用用户手册/线索管理"
            },
            {
              "type": "doc",
              "id": "user_manual/customer_manage",
              "label": "客户管理",
              "key": "doc:功能手册/通用用户手册/客户管理"
            },
            {
              "type": "doc",
              "id": "user_manual/contract",
              "label": "合同管理",
              "key": "doc:功能手册/通用用户手册/合同管理"
            },
            {
              "type": "doc",
              "id": "user_manual/order",
              "label": "订单管理",
              "key": "doc:功能手册/通用用户手册/订单管理"
            },
            {
              "type": "doc",
              "id": "user_manual/mobile",
              "label": "移动端",
              "key": "doc:功能手册/通用用户手册/移动端"
            }
          ],
          "key": "cat:功能手册/通用用户手册"
        },
        {
          "type": "category",
          "label": "第三方集成",
          "collapsed": true,
          "items": [
            {
              "type": "doc",
              "id": "user_manual/dataease",
              "label": "BI 集成指南",
              "key": "doc:功能手册/第三方集成/BI 集成指南"
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
                  "key": "doc:功能手册/第三方集成/Skills 集成指南/集成到 WorkBuddy"
                },
                {
                  "type": "doc",
                  "id": "skill/openclaw",
                  "label": "集成到 OpenClaw",
                  "key": "doc:功能手册/第三方集成/Skills 集成指南/集成到 OpenClaw"
                }
              ],
              "key": "cat:功能手册/第三方集成/Skills 集成指南"
            },
            {
              "type": "doc",
              "id": "mcp_server",
              "label": "MCP 服务",
              "key": "doc:功能手册/第三方集成/MCP 服务"
            }
          ],
          "key": "cat:功能手册/第三方集成"
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
