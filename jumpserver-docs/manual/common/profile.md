---
title: 个人设置
description: 介绍 JumpServer 个人设置中的个人信息、生物特征、认证设置、访问密钥、连接令牌与偏好设置。
---

## 1 功能简介

个人设置是当前登录账号的自助管理入口，用于查看账号资料、维护登录认证方式与连接凭据、调整个人使用偏好。密码修改、MFA 绑定、SSH 公钥维护、访问密钥管理等日常操作由账号本人完成，无需管理员代办。

路径：单击页面右上角的用户名称进入 **个人设置**，页面左侧列出与当前账号相关的各项设置。

页签包括：个人信息、认证设置、访问密钥、连接令牌、偏好设置。系统管理员与组织管理员还会额外看到 **访问令牌**，详见管理员的 [个人设置](../admin/profile.md)。

**作用范围：**
个人设置仅作用于当前登录账号，各项修改立即生效，不影响其他用户。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/profile_01_personal_info.png" alt="图 1  个人信息" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 1  个人信息</div>

## 2 个人信息

路径：选择 **个人设置 > 个人信息**。页面分为 **基本信息**、**认证配置**、**通知设置**、**生物特征** 与 **信息更改** 五个区域。

### 2.1 基本信息

该区域只读展示当前账号资料，便于核对身份与状态：

- **名称**： 账号显示名。
- **用户名**： 登录名。
- **邮箱 / 手机**： 联系方式。
- **用户组 / 系统角色 / 组织角色**： 当前归属与权限范围。
- **SSH Key**： 已绑定的公钥；未配置时显示为 —。
- **多因子认证**： 启用或禁用。
- **来源**： 账号来源，例如数据库。
- **激活 / 最后登录日期 / 最后更新密码日期 / 创建日期 / 失效日期 / 备注**： 账号生命周期信息。

### 2.2 认证配置

在右侧 **认证配置** 中可绑定 MFA，或跳转更新密码与 SSH 公钥：

- **MFA 认证**： 单击 **设置**，按页面提示绑定可用的二次验证方式。绑定成功后，**基本信息** 中的 **多因子认证** 变为启用，后续登录需完成二次验证。
- **更新密码**： 单击 **更新**，跳转至 **认证设置 > 登录密码**。
- **更新SSH公钥**： 单击 **更新**，跳转至 **认证设置 > 登录 SSH 公钥**。

### 2.3 通知设置

用于控制当前账号接收消息的渠道。默认提供 **站内信** 与 **邮箱**：打开对应开关即订阅，关闭即停止推送。

### 2.4 生物特征

**生物特征** 用于把当前账号与本人的人脸绑定绑定后可用人脸完成登录时的多因子认证，也可以在连接资产时作为二次确认或在线监控的依据。

目前支持人脸识别，属于旗舰版功能：需要服务器管理员在服务端开启人脸识别（配置详情见 [人脸识别运维设置](../ops/face_recognition)），并在用户的 **允许的 MFA 类型** 中勾选 **人脸识别**，当前账号才会显示绑定入口。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/profile_face_user_create.png" alt="图 2  新建用户时启用人脸识别" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 2  新建用户时启用人脸识别</div>

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/profile_face_user_update.png" alt="图 3  更新用户时启用人脸识别" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 3  更新用户时启用人脸识别</div>

**绑定人脸**：在 **认证配置** 中单击 **MFA 认证** 的 **设置**，选择人脸识别后进入采集流程；正对摄像头，按页面提示依次完成 3 个样本的采集，采集成功后即完成绑定，**基本信息** 中的 **多因子认证** 会变为启用。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/profile_face_bind.png" alt="图 4  绑定人脸" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 4  绑定人脸</div>

**解绑人脸**：已绑定的账号会显示 **解绑** 按钮，单击后需要先完成一次人脸身份认证，验证通过即解绑（如图 5 所示）；解绑后多因子认证不再使用人脸方式。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/profile_face_unbind.png" alt="图 5  解绑人脸" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 5  解绑人脸</div>

绑定完成后，人脸会在以下场景中参与身份验证：登录时如果启用了多因子认证，可以在认证方式中选择 **Face** 完成人脸比对。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/profile_face_mfa_login.png" alt="图 6  登录时的多因子认证" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 6  登录时的多因子认证</div>

连接资产时可作为二次确认或在线监控。其中人脸验证与人脸在线均在 **访问控制** 的 **资产连接** 中作为动作加入规则。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/profile_face_acl_online.png" alt="图 7  访问控制中的人脸在线动作" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 7  访问控制中的人脸在线动作</div>

连接命中人脸验证规则的资产时，需要先通过人脸验证才能建立连接。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/profile_face_connect_verify.png" alt="图 8  连接资产时的人脸验证" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 8  连接资产时的人脸验证</div>

连接命中人脸在线规则的资产后，会话期间会持续进行人脸监控，人脸离开画面超过宽限期时会话会被暂停，重新回到画面后可恢复。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/profile_face_connect_monitor.png" alt="图 9  连接资产时的人脸在线监控" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 9  连接资产时的人脸在线监控</div>

### 2.5 信息更改

可补充 **手机** 与 **微信**，输入完成后单击 **更新**。

## 3 认证设置

路径：选择 **个人设置 > 认证设置**，或在个人信息页单击 **更新密码 / 更新SSH公钥**。该页包含 **登录密码** 与 **登录 SSH 公钥** 两个页签。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/profile_02_auth.png" alt="图 10  认证设置登录密码" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 10  认证设置登录密码</div>

### 3.1 登录密码

1. 选择 **登录密码** 页签。
2. 输入 **原密码**、**新密码**、**确认密码**。
3. 单击 **提交**。需放弃修改时单击 **还原**。

### 3.2 登录 SSH 公钥

1. 选择 **登录 SSH 公钥** 页签。
2. 按页面提示上传或粘贴公钥，亦可下载当前公钥。
3. 使用 SSH 客户端登录堡垒机时，使用与该公钥配对的私钥。

## 4 访问密钥

路径：选择 **个人设置 > 访问密钥**。访问密钥通过 API Key 签名请求头完成认证，每个请求的头部不同，相对 Token 方式更安全。密钥权限与当前用户角色一致，API 文档地址为堡垒机站点下的 `/api/docs/`。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/profile_03_access_key.png" alt="图 11  访问密钥列表" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 11  访问密钥列表</div>

- 单击 **创建** 生成访问密钥。
- 列表字段包括 Secret、IP 白名单、激活中、创建时间、最后使用日期。

**Secret 只显示一次：**
为降低泄露风险，Secret 仅在生成时可以查看。请立即复制并妥善保管；泄露后须作废并重新创建。每个用户最多支持创建 10 个访问密钥。

## 5 连接令牌

路径：选择 **个人设置 > 连接令牌**。连接令牌将身份验证与连接资产结合起来使用，支持一键登录到资产，目前支持的组件包括 KoKo、Lion、Magnus、Razor 等。本页用于查看令牌并使令牌过期，不在此页直接新建。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/profile_04_connection_token.png" alt="图 12  连接令牌" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 12  连接令牌</div>

常用生成方式：

- 连接 SSH 协议资产：在 Web 终端选择连接方式为 **客户端**。
- 连接 RDP 协议资产：在 Web 终端选择连接方式为 **客户端**。
- 连接数据库：在 Web 终端选择连接方式为 **数据库客户端**。
- 通过调用 API 创建。

## 6 偏好设置
### 6.1 基本

**基本**页签用于设置当前账号的通用偏好，包括界面语言和导出文件的加密密码。这些设置仅对当前登录账号生效，不影响其他用户。

- **语言**：选择界面语言，例如中文（简体）。
- **文件加密密码**：为从 JumpServer 导出的文件设置加密密码，降低文件泄露风险。显示 **已配置** 为是或否；输入 **新密码** 与 **确认密码** 后单击 **提交**，需放弃修改时单击 **还原**。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/profile_05_preference.png" alt="图 13  偏好设置基本" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 13  偏好设置基本</div>

### 6.2 Web终端

选择 **Web终端** 页签，可覆盖全局默认值，仅对当前用户生效。各项均可单击 **使用全局默认值** 恢复。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/profile_06_web_terminal.png" alt="图 14  Web 终端偏好" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 14  Web 终端偏好</div>

## 7 注意事项

**凭据保管：**
访问密钥 Secret 与连接令牌均属于凭据。不要写入公共文档或截图明文，过期或不再使用时及时删除。

**密码与公钥变更立即生效：**
提交新的登录密码或 SSH 公钥后立即生效。请确认已保存新凭据，避免将本人锁在系统之外。
