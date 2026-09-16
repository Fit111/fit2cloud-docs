---
title: 系统设置
description: 介绍 1Panel AI 网关系统设置页的企业认证配置，支持钉钉、飞书、企业微信、LDAP 与 OIDC 企业账号登录。
slug: /user_manual/ai_gateway/system_settings
---

## 1 概述

系统设置用于管理网关的平台级配置。当前版本提供**企业认证**能力（v1.1.0 起）：支持接入**钉钉、飞书、企业微信、LDAP 与 OIDC** 五种企业登录方式。启用后，登录页下方会出现「企业账号登录」区块，成员单击对应按钮即可使用企业身份登录网关。

页面以卡片形式列出五种认证方式，每张卡片展示当前**启用状态**、**首次登录用户组**与**密钥配置状态**，并提供以下操作：

- **配置 / 更新**：打开该认证方式的配置抽屉，填写企业平台的相关参数。
- **测试连接**：保存配置后校验认证参数是否可用。
- **启用 / 禁用**：控制该登录方式是否在登录页展示。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/system_settings/image1-enterprise-auth.png" alt="企业认证"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 1  企业认证</div>

## 2 钉钉与飞书

### 钉钉

**平台侧配置**

1. 使用钉钉管理员账号登录 [钉钉开放平台](https://open-dev.dingtalk.com/)。
2. 在「应用开发」中选择企业内部应用，应用类型选择 **H5 微应用**，填写应用名称、描述与图标，单击**创建应用**。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/system_settings/image11-dingtalk-create-app.png" alt="钉钉创建企业内部应用"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 2  钉钉开放平台创建企业内部应用</div>

3. 进入应用详情的「凭证与基础信息」页，获取应用的 **Client ID**（AppKey）与 **Client Secret**（AppSecret）；**企业 ID** 可在钉钉管理后台的「企业信息」页查看。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/system_settings/image12-dingtalk-credential.png" alt="钉钉应用凭证"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 3  应用凭证页查看 AgentId、AppKey 与 AppSecret</div>

4. 在「安全设置」中配置服务器出口 IP 与回调地址：将网关配置抽屉中显示的**授权回调地址**填入。
5. 完成配置后**发布应用**，钉钉的配置需在应用发布成功后才生效。

**网关侧配置**

- **企业 ID / Tenant ID**：钉钉管理后台「企业信息」页的企业标识。
- **应用 ID / Client ID**：自建应用的 Client ID（即 AppKey）。
- **应用密钥 / Client Secret**：自建应用的 Client Secret（即 AppSecret）。
- **授权回调地址**：网关生成的回调地址，填写到钉钉应用的回调配置中。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/system_settings/image2-dingtalk-drawer.png" alt="钉钉配置"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 4  网关侧钉钉配置抽屉</div>

### 飞书

**平台侧配置**

1. 使用管理员账号登录 [飞书开放平台](https://open.feishu.cn/)，单击**创建企业自建应用**，填写应用名称、描述与图标后创建。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/system_settings/image13-feishu-create-app.png" alt="飞书创建企业自建应用"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 5  飞书开放平台创建企业自建应用</div>

2. 在「凭证与基础信息」页获取应用的 **App ID**（应用 ID）与 **App Secret**（应用密钥），以及企业的 **Tenant ID**（企业 ID）。
3. 在「安全设置 → 重定向 URL」中添加回调地址：将网关配置抽屉中显示的**授权回调地址**填入；如企业开启了 IP 白名单，需同时添加网关服务器出口 IP。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/system_settings/image14-feishu-redirect-url.png" alt="飞书安全设置重定向URL"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 6  「安全设置」中配置重定向 URL 与 IP 白名单</div>

4. 按需开通应用权限，创建版本并**发布应用**。

**网关侧配置**

- **企业 ID / Tenant ID**：飞书开放平台可查看的企业标识。
- **应用 ID / Client ID**：企业自建应用的 App ID。
- **应用密钥 / Client Secret**：企业自建应用的 App Secret。
- **授权回调地址**：网关生成的回调地址，填写到飞书应用的重定向 URL 中。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/system_settings/image3-feishu-drawer.png" alt="飞书配置"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 7  网关侧飞书配置抽屉</div>

## 3 企业微信

### 平台侧配置

1. 使用**企业微信管理员账号**（或具有通讯录管理权限的子管理员）登录[企业微信管理后台](https://work.weixin.qq.com/wework_admin/loginpage_wx?from=myhome)，普通成员账号无法创建应用。

2. 在「我的企业 → 企业信息」页查看并记录**企业 ID（CorpID）**，后续填入网关的 CorpID 字段。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/system_settings/image10-wecom-corp-id.png" alt="查看企业 ID"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 8  在「我的企业 → 企业信息」页查看企业 ID（CorpID）</div>

3. 在「应用管理」页的「自建应用」区块单击**创建应用**，进入应用创建页。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/system_settings/image7-wecom-console.png" alt="企业微信应用管理"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 9  企业微信管理后台「应用管理」页，单击「创建应用」</div>

4. 填写**应用名称**（如 `AI 网关`）、上传**应用 Logo**、设置**可见范围**（决定哪些成员可使用该应用登录网关），单击**创建应用**。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/system_settings/image8-wecom-create-app.png" alt="创建自建应用"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 10  创建自建应用，填写应用名称、Logo 与可见范围</div>

5. 创建成功后进入应用详情页，获取 **AgentId** 并单击 **Secret** 旁的「查看」获取应用密钥（Secret），分别填入网关的应用 AgentID 与应用密钥字段。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/system_settings/image9-wecom-app-detail.png" alt="查看 AgentId 与 Secret"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 11  应用详情页查看 AgentId 与 Secret</div>

6. 在该应用的「网页授权及 JS-SDK」中配置**可信域名**（填写网关的访问域名）。配置可信域名前需完成**域名归属认证**：下载企业微信提供的 `WW_verify_xxxxx.txt` 校验文件，将其放置在网关域名的根目录下（或按实际部署方式通过 Nginx 等返回该文件内容），确保可通过 `https://你的域名/WW_verify_xxxxx.txt` 访问。

7. 如部署环境 IP 固定，建议同时在应用的「企业可信 IP」中添加网关服务器出口 IP。

:::warning[企业微信必须使用已备案的 HTTPS 域名]
企业微信的授权回调域名要求为**已备案的 HTTPS 域名**，不支持纯 IP 或 `http` 地址。若网关以内网 IP 方式部署，无法配置企业微信登录，建议改用钉钉、飞书或 LDAP。
:::

### 网关侧配置

- **CorpID**：企业微信「我的企业 → 企业信息」页的企业唯一标识。
- **应用 AgentID（正整数）**：自建应用的 AgentID。
- **应用密钥 / Client Secret**：自建应用的应用密钥（Secret）。
- **授权回调地址**：网关生成的回调地址，对应自建应用的网页授权可信域名配置。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/system_settings/image4-wecom-drawer.png" alt="企业微信配置"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 12  企业微信配置</div>

## 4 LDAP

LDAP 用于对接企业已有的目录服务（如 OpenLDAP、Active Directory）。相关参数由企业目录服务的管理员提供，无需在企业微信、钉钉等外部平台创建应用：

- **LDAP 连接地址**：目录服务地址。`ldaps://` 使用 TLS 加密，`ldap://` 可选择启用 StartTLS。
- **搜索根 Base DN**：用户搜索的起始目录节点。
- **服务账号 Bind DN**：用于搜索用户的服务账号 DN。
- **用户搜索过滤器**：检索用户的 LDAP 过滤器，必须包含一个用户名占位符，如 `(uid={username})`。
- **用户名属性**：登录时匹配用户名的属性，如 `uid`、`sAMAccountName`。
- **稳定身份属性**：用于唯一标识用户的属性，默认 `entryUUID`；Active Directory 环境选择 `objectGUID`。
- **LDAP 服务账号密码**：服务账号对应的密码。
- **附加信任 CA 证书（PEM）**：使用 LDAPS 或 StartTLS 时，如需信任自签名证书可在此上传。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/system_settings/image5-ldap-drawer.png" alt="LDAP 配置"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 13  LDAP 配置</div>

## 5 OIDC

OIDC 用于对接支持 OpenID Connect 协议的身份认证服务（如 Keycloak、Authing、Okta 等）。配置前需先在身份提供商（IdP）管理界面创建一个客户端（Client），将网关显示的**授权回调地址**登记为该客户端的回调地址，并确认 IdP 的 Issuer 地址可用，再回到网关填写：

- **应用 ID / Client ID**：在身份提供商（IdP）注册的客户端标识。
- **应用密钥 / Client Secret**：客户端对应的密钥。
- **授权回调地址**：网关的认证回调地址，需配置到 IdP 的客户端回调设置中。
- **OIDC Issuer**：身份提供商的 Issuer 标识地址。
- **附加信任 CA 证书（PEM）**：IdP 使用自签名证书时上传。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/system_settings/image6-oidc-drawer.png" alt="OIDC 配置"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 14  OIDC 配置</div>

## 6 通用配置说明

以下配置项在各认证方式的抽屉中通用：

- **启用**：该认证方式的总开关，启用并保存后登录页展示对应按钮。
- **首次登录用户组**：企业账号首次登录后归入的用户组，决定其可用模型与权限；建议提前在「用户组」中规划好目标用户组。
- **密钥加密保存**：密钥保存后加密存储；编辑时**留空表示保留原值，填写则替换**。更换企业、应用、Issuer 或目录身份范围时须重新填写。
- **允许查看密钥**：勾选后管理员可查看已保存的密钥明文。

## 7 注意事项

- 启用任一认证方式前，请先在对应平台完成应用创建，并正确配置授权回调地址，否则登录跳转会失败。
- 多种认证方式可同时启用，登录页将并列展示已启用的企业登录方式，用户可任选其一。
- 配置保存后建议先使用「测试连接」验证可用性，再对团队成员开放企业登录方式。
