---
title: 企业设置管理
description: 介绍 Cordys CRM 企业设置中的界面设置、三方设置、邮件设置、模型设置与术语设置。
---

企业设置管理集中维护平台的全局配置，涵盖界面品牌、第三方平台对接、系统邮件、AI 模型以及企业术语五类内容。这些配置对整个企业生效，通常由管理员在系统上线初期完成，后续按需调整。

## 1 功能简介

企业设置由五个页签组成：**界面设置** 用于自定义平台的主题、Logo 与名称；**三方设置** 用于对接企业协同软件、数据分析工具、智能体平台、标讯平台与企业信息查询平台；**邮件设置** 用于配置系统发信服务器；**模型设置** 用于接入 AI 模型；**术语设置** 用于统一企业内部的标准表述。

## 2 入口位置

在左侧导航点击 **系统 › 企业设置**，进入企业设置页面，默认停留在「界面设置」页签。

## 3 界面设置

界面设置分为主题色、背景色、登录页面设置与设置四个区域。主题色与背景色均支持「默认」与「自定义」，背景色还可选择「跟随主题色」。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/cordys/user_manual/enterprise-ui.png" alt="图 1  界面设置 - 登录页面设置" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 1  界面设置 - 登录页面设置</div>

「登录页面设置」右侧提供登录页的预览，可配置以下内容：

- **网站 Logo**：顶部网站显示的 Logo。建议使用 SVG 或 PNG 格式透明背景图片，高度小于 32px，图片大小不超过 200KB。
- **登录 Logo**：登录页面左侧显示的 Logo。建议使用 SVG 或 PNG 格式透明背景图片，高度小于 48px，图片大小不超过 200KB。
- **登录背景图**：建议使用 SVG 格式；矢量图建议尺寸 1440 × 900，位图建议尺寸 1920 × 1080，图片大小不超过 800KB。
- **Slogan**：必填，展示在产品 Logo 下方的一行标语。
- **网站名称**：显示在网页标签页上的平台名称。

页面下方的「设置」区域用于配置主界面的 Logo 与帮助文档地址。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/cordys/user_manual/enterprise-ui-end.png" alt="图 2  界面设置 - 主界面配置" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 2  界面设置 - 主界面配置</div>

- **Logo**：主界面顶部栏显示的 Logo，要求与网站 Logo 一致（SVG 或 PNG 透明背景，高度小于 32px，不超过 200KB）。
- **帮助文档**：帮助文档的跳转链接，默认为官方帮助文档地址。修改后成员点击顶栏「帮助中心 › 帮助文档」将跳转到该地址，具体说明请参见[帮助文档](./help_docs.md)。

## 4 三方设置

三方设置按平台类型分组，每个平台以卡片形式展示当前配置状态（未配置 / 成功），并提供「去配置」或「测试连接」操作，配置完成后通过开关控制该能力是否启用。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/cordys/user_manual/enterprise-third.png" alt="图 3  三方设置 - 协同、BI 与智能体平台" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 3  三方设置 - 协同、BI 与智能体平台</div>

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/cordys/user_manual/enterprise-third-end.png" alt="图 4  三方设置 - 智能体、标讯与企业信息查询平台" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 4  三方设置 - 智能体、标讯与企业信息查询平台</div>

各分组的可配置平台如下：

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"16px 0 8px"}}>表 1  三方设置可对接的平台</div>

| 分组 | 平台 | 配置说明 |
|---|---|---|
| 企业协同软件 | 企业微信 / 钉钉 / 飞书 | 配置企业应用信息，可开启「同步用户」将成员同步到系统 |
| 数据分析工具 | DataEase | 配置连接信息并测试连接，开启后启用「仪表板」能力 |
| 智能体平台 | MaxKB | 配置连接信息，开启后启用「智能体」能力 |
| 标讯平台 | 大单网 | 配置后测试连接，开启后启用标讯模块数据 |
| 企业信息查询平台 | 企查查 | 配置后启用企业信息查询能力 |

## 5 邮件设置

邮件设置用于配置系统发信服务器，配置完成后再决定哪些消息场景需要发送邮件（具体场景开关在[消息设置管理](./message_setting.md)中维护）。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/cordys/user_manual/enterprise-mail.png" alt="图 5  邮件设置" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 5  邮件设置</div>

需填写的内容包括 SMTP 主机、SMTP 端口、SMTP 账户、SMTP 密码、指定发件人与测试收件人，并可开启 SSL 与 TSL 加密。填写完成后点击「测试连接」验证配置是否可用。

## 6 模型设置

模型设置用于接入 AI 模型，供智能体等能力调用。点击「模型供应商」可添加模型，列表展示模型名称、模型 ID、提供商、状态、日调用量上限（tokens）、今日调用量（tokens）、创建时间与创建人。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/cordys/user_manual/enterprise-model.png" alt="图 6  模型设置" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 6  模型设置</div>

## 7 术语设置

术语设置用于统一企业内部的标准表述。左侧按业务域分为销售类、客户类、合同财务类、流程审批类，右侧维护该业务域下的标准术语、同义词与禁用词，并支持启用或停用。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/cordys/user_manual/enterprise-term.png" alt="图 7  术语设置" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 7  术语设置</div>

:::important[重要]
界面设置中的 Logo、背景图与邮件配置会直接影响全局展示与消息投递，请在修改前准备好符合格式与体积要求的素材，并保留原始文件以便回滚。
:::
