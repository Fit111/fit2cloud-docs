---
title: 个人设置
description: 介绍 JumpServer 个人设置中的个人信息、认证设置、Passkeys、访问密钥、临时密码、连接令牌、访问令牌与偏好设置。
---

## 1 功能简介

个人设置用于查看并维护当前登录账号的资料、认证方式和连接偏好。管理员完成登录后，可在此绑定 MFA、更新登录密码与 SSH 公钥、管理 API 访问密钥和各类令牌，并按个人习惯调整 Web 终端参数。

JumpServer v5 将个人相关能力收敛到同一左侧菜单，页签包括：个人信息、认证设置、Passkeys、访问密钥、临时密码、连接令牌、访问令牌、偏好设置。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_admin_profile_02.png" alt="图 1  个人信息概览" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 1  个人信息概览</div>

## 2 前提条件

- 已使用具备系统管理员或组织管理员角色的账号登录 JumpServer。
- 若需绑定企业微信、钉钉、飞书、Lark、Slack 或使用邮箱 / 短信类 MFA，请先由管理员在 **系统设置 > 认证设置 / 通知设置** 中完成对应通道配置。
- 使用 Passkeys 时，浏览器与操作系统需支持 WebAuthn。

:::important[权限说明]
个人设置仅作用于当前登录账号。访问密钥的权限与当前用户角色一致，不会超出用户本身的授权范围。
:::

## 3 进入个人设置

1. 登录 JumpServer 控制台。
2. 单击页面右上角用户名称。
3. 在下拉菜单中选择 **个人信息**、**认证设置** 或 **偏好设置**。进入后，也可在左侧 **个人设置** 菜单中切换其余页签。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_admin_profile_01.png" alt="图 2  右上角用户菜单" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 2  右上角用户菜单</div>

## 4 个人信息

路径：选择 **个人设置 > 个人信息**。页面分为 **基本信息**、**认证配置**、**通知设置** 和 **信息更改** 四个区域。

### 4.1 基本信息

该区域只读展示当前账号资料，便于核对身份与状态：

- **名称**： 显示名。
- **用户名**： 登录名。
- **邮箱 / 手机**： 联系方式。
- **用户组 / 系统角色 / 组织角色**： 当前归属与授权。
- **SSH Key**： 已绑定的公钥摘要；未配置时显示为 —。
- **多因子认证**： 启用或禁用。
- **来源**： 账号来源，如数据库。
- **激活 / 最后登录日期 / 最后更新密码日期 / 创建日期 / 失效日期 / 备注**： 账号生命周期信息。

### 4.2 认证配置

在右侧 **认证配置** 中可绑定第三方认证、配置 MFA，或跳转更新密码与 SSH 公钥：

- **企业微信 / 钉钉 / 飞书 / Lark / Slack 认证**： 单击 **绑定**，按向导完成第三方账号关联。
- **MFA 认证**： 单击 **设置**，按页面提示绑定一次性口令、邮箱、短信或人脸等可用方式。绑定成功后，**基本信息** 中的 **多因子认证** 将变为启用，后续登录需完成二次验证。
- **更新密码 / 更新 SSH 公钥**： 单击 **更新**，进入 **认证设置** 页继续操作。

:::note[MFA 与通知通道]
邮箱或短信 MFA 依赖系统通知通道。若个人页无法选择 Email / SMS，请先检查 **系统设置 > 通知设置** 是否已配置邮件服务器或短信网关。
:::

### 4.3 通知设置

用于控制当前账号接收消息的渠道。默认提供 **站内信** 和 **邮箱**；企业微信、钉钉、飞书、Lark、Slack 需在系统侧启用后才会生效。打开对应开关即可订阅，关闭即停止推送。

### 4.4 信息更改

可补充 **手机** 与 **微信**。输入完成后单击 **更新**。

## 5 认证设置

路径：选择 **个人设置 > 认证设置**，或在个人信息页单击 **更新密码 / 更新 SSH 公钥**。该页包含 **登录密码** 与 **登录 SSH 公钥** 两个页签。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_admin_profile_03.png" alt="图 3  认证设置登录密码" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 3  认证设置登录密码</div>

### 5.1 登录密码

1. 选择 **登录密码** 页签。
2. 输入 **原密码**、**新密码**、**确认密码**。
3. 单击 **提交**。需放弃修改时单击 **还原**。

### 5.2 登录 SSH 公钥

1. 选择 **登录 SSH 公钥** 页签。
2. 按页面提示上传或粘贴公钥，亦可下载当前公钥。
3. 使用 SSH 客户端登录堡垒机时，使用与该公钥配对的私钥。

## 6 Passkeys

路径：选择 **个人设置 > Passkeys**。Passkeys 基于 WebAuthn，可将当前账号与本机安全密钥、Windows Hello 或同类设备绑定，用于免密或二次验证。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_admin_profile_04.png" alt="图 4  Passkeys 列表" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 4  Passkeys 列表</div>

1. 单击 **创建**，按浏览器提示在本机完成 Passkey 登记。
2. 列表展示名称、是否启用、最后使用日期、创建日期。
3. 可在操作列停用或删除不再使用的 Passkey。

## 7 访问密钥

路径：选择 **个人设置 > 访问密钥**。访问密钥通过 API Key 签名请求头完成认证，每个请求的头部不同，相对 Token 方式更安全。密钥权限与当前用户角色一致。API 文档地址为堡垒机站点下的 `/api/docs/`。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_admin_profile_05.png" alt="图 5  访问密钥列表" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 5  访问密钥列表</div>

1. 单击 **创建** 生成访问密钥。
2. 列表字段包括 Secret、IP 白名单、是否激活、创建时间、最后使用日期。
3. 每个用户最多创建 10 个访问密钥。

:::warning[Secret 只显示一次]
Secret 仅在生成时可查看，之后无法再次明文展示。请立即复制并妥善保管，泄露后须作废并重新创建。
:::

## 8 临时密码

路径：选择 **个人设置 > 临时密码**。临时密码用于在短时间内代替登录密码完成认证，适合应急协助或一次性登录。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_admin_profile_06.png" alt="图 6  临时密码" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 6  临时密码</div>

- 单击 **创建** 生成一条临时密码。
- 列表字段：用户名、临时密码、失效日期、校验日期、是否有效。
- 界面提示：临时密码有效期为 300 秒，使用后立刻失效。

## 9 连接令牌

路径：选择 **个人设置 > 连接令牌**。连接令牌把身份验证与连接资产绑定，支持一键登录到资产。当前支持的组件包括 KoKo、Lion、Magnus、Razor 等。本页用于查看令牌并使令牌过期，不在此页直接新建。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_admin_profile_07.png" alt="图 7  连接令牌" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 7  连接令牌</div>

常用生成方式：

- 连接 SSH 协议资产：在 Web 终端选择连接方式为 **客户端**。
- 连接 RDP 协议资产：在 Web 终端选择连接方式为 **客户端**。
- 连接数据库：在 Web 终端选择连接方式为 **数据库客户端**。
- 通过调用 API 创建。

列表字段包括资产名称、失效日期、是否激活。可在操作列使令牌过期。

## 10 访问令牌

路径：选择 **个人设置 > 访问令牌**。访问令牌是通过 JumpServer 客户端走 OAuth2（授权码授权）流程生成的临时凭证，用于访问受保护资源。用户完成身份验证后，系统签发短期令牌供后续请求校验。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_admin_profile_08.png" alt="图 8  访问令牌列表" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 8  访问令牌列表</div>

列表字段：

- **令牌**： 令牌标识（界面仅展示部分字符）。
- **范围**： 如 `write read`。
- **有效**： 是 / 否。
- **失效日期 / 更新日期 / 创建日期**。

可在操作列删除已失效或不需要的令牌。

## 11 偏好设置

路径：选择 **个人设置 > 偏好设置**。包含 **基本** 与 **Web终端** 两个页签。

### 11.1 基本

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_admin_profile_09.png" alt="图 9  偏好设置基本" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 9  偏好设置基本</div>

- **语言**： 选择界面语言，例如中文（简体）。
- **文件加密密码**： 为从 JumpServer 导出的文件设置加密密码，降低文件泄露风险。显示 **已配置** 为是或否。输入 **新密码** 与 **确认密码** 后单击 **提交**；放弃修改单击 **还原**。

### 11.2 Web 终端

选择 **Web终端** 页签，可覆盖全局默认值，仅对当前用户生效。各项均可单击 **使用全局默认值** 恢复。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_admin_profile_10.png" alt="图 10  Web 终端偏好" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 10  Web 终端偏好</div>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"16px 0 8px"}}>表 1  Web 终端偏好说明</div>

| 分组 | 配置项 | 说明 |
| --- | --- | --- |
| 基本配置 | 异步加载资产树 | 连接资产时是否实时加载资产树。 |
| 基本配置 | 连接默认打开方式 | 当前窗口或新窗口。 |
| 基本配置 | 主题 | 默认、深灰色、深蓝色。 |
| 图形化 | RDP 分辨率 | 如 1920x1080；可按环境调整。 |
| 图形化 | 键盘布局 | 连接 Windows 资产时使用的键盘布局。 |
| 图形化 | RDP 客户端选项 | 全屏、多屏显示、磁盘挂载、远程麦克风。 |
| 图形化 | RDP 颜色质量 | 高（32 位）、真彩色（24 位）、中（16 位）。 |
| 图形化 | RDP 智能尺寸 | 调整窗口时是否缩放远程桌面内容。 |
| 图形化 | 远程应用连接方式 | Web 或客户端。 |
| 图形化 | 文件名冲突解决方案 | 经 KoKo 上传文件重名时选择替换或加后缀。 |
| 命令行 | 字符终端字体大小 | 终端字体大小。 |
| 命令行 | 字符终端 Backspace as Ctrl+H | 是否将 Backspace 作为 Ctrl+H。 |
| 命令行 | 右键快速粘贴 | 命令行是否开启右键粘贴。 |
| 命令行 | 终端主题名称 | 字符终端配色主题，如 ENCOM。 |

## 12 注意事项

:::note[令牌与密钥保管]
访问密钥 Secret、临时密码、连接令牌和访问令牌均属于凭据。不要写入公共文档或截图明文，过期或不再使用时及时删除。
:::

:::warning[密码与公钥变更立即生效]
提交新的登录密码或 SSH 公钥后立即生效。请确认已保存新凭据，避免将本人锁在系统之外。
:::
