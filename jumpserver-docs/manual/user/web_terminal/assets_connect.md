---
title: 连接资产
description: 介绍 JumpServer Web 终端中资产的连接步骤、各类资产的连接方式、批量连接与会话管理。
---

Web 终端的核心功能为资产连接。连接资产时先在右侧列表完成连接配置，再根据不同资产类型选择对应的连接方式。

## 1 连接步骤

1. **选择资产** 在右侧列表中选择想要连接的资产
2. **选择协议** 不同的资产在配置页面可以配置不同的连接方式如Linux资产可以配置ssh，sftp，vnc等协议
3. **选择账号** 选择管理员给授权的资产账号
4. **连接资产** 选择是在web控制台进行资产连接还是使用客户端，或者其他的连接方式，如远程应用
5. **高级选项** 可以选择终端的字符集以及其他配置
6. **自动连接** 勾选之后再次点击左侧的资产，会直接复用上次的连接信息，如果想要重新选择连接方式以及账号，右键资产选择连接可以重新选择
7. **连接按钮** 点击之后创建一个资产连接

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_user_wb_luna_02.png" alt="图 1  资产连接步骤" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 1  资产连接步骤</div>

## 2 资产连接方式

### 2.1 Linux 资产连接

Linux 资产支持以下连接方式：

- **Web CLI**：命令行连接方式，直接在浏览器中打开终端。
- **Web SFTP**：通过 Web 方式进行 SFTP 文件传输。
- **SSH 客户端**：选择客户端方式中的 SSH 客户端，JumpServer 客户端会拉起本地 SecureCRT 或其他 SSH 客户端并代填连接信息。
- **SSH 向导**：生成加密连接信息，复制到任意命令行执行即可连接对应资产。

### 2.2 Windows 资产连接

Windows 资产在连接按钮中会显示该资产当前已连接的用户数量。支持以下连接方式：

- **Web GUI**：在 JumpServer 页面中直接连接 Windows 资产。
- **远程桌面客户端**：拉起 JumpServer 客户端，由客户端拉起本地 Mstsc 程序连接 Windows 资产。Mac 系统需下载微软 RDP 官方客户端，可在 Web 终端的 **帮助 > 下载** 中跳转下载。
- **RDP 文件**：下载一个 RDP 文件，打开后拉起本地 Mstsc 程序连接 Windows 资产。Mac 系统需下载微软 RDP 官方客户端，可在 Web 终端的 **帮助 > 下载** 中跳转下载。

### 2.3 数据库资产连接

JumpServer 提供多种方式登录数据库，包括命令行方式 Web CLI、图形化方式 Web GUI、数据库代理直连方式 DB Client、远程应用方式拉起 DBeaver 等。

不同数据库类型支持的连接方式如下：

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"16px 0 8px"}}>表 1  数据库连接方式支持情况</div>

| 数据库类型 | Web GUI | Web CLI | 数据库客户端（X-Pack） | DB 连接向导（X-Pack） | 远程应用方式 |
| --- | --- | --- | --- | --- | --- |
| MySQL | ✓ | ✓ | ✓ | ✓ | ✓ |
| MariaDB | ✓ | ✓ | ✓ | ✓ | ✓ |
| PostgreSQL | ✓ | ✓ | ✓ | ✓ | ✓ |
| Oracle（X-Pack） | ✓ | ✓ | ✓ | ✓ | ✓ |
| SQLServer（X-Pack） | ✓ | ✓ | ✓ | ✓ | ✓ |
| Redis | ✗ | ✓ | ✓ | ✓ | ✓ |
| MongoDB | ✗ | ✓ | ✓ | ✓ | ✓ |
| ClickHouse（X-Pack） | ✗ | ✓ | ✗ | ✗ | ✓ |
| Dameng（X-Pack） | ✓ | ✗ | ✗ | ✗ | ✓ |

说明：✓ 表示支持该连接方式，✗ 表示不支持该连接方式。

- **Web CLI 方式**：在 Web 终端页面点击数据库，选择 Web CLI 方式连接数据库。
- **Web GUI 方式**：在 Web 终端页面点击数据库，选择 Web GUI 方式图形化连接数据库。
- **客户端方式**：
  - **数据库客户端**：选择客户端方式中的数据库客户端连接数据库，该操作会拉起个人 PC 中的 DBeaver 客户端（已配置的前提下）进行连接。
  - **DB 连接向导**：选择客户端方式中的 DB 连接向导，生成连接数据库所需的信息（客户端方式生成的信息提供两种连接方式连接数据库）。
- **远程应用方式**：在 Web 终端页面点击数据库，选择远程应用方式连接数据库。使用此方式的前提是需要管理员提前配置远程应用并发布 Navicat 或 DBeaver。

:::note[客户端与远程应用需提前配置]
数据库客户端和 DB 连接向导功能依赖 JumpServer 客户端；远程应用方式需要管理员提前配置远程应用并发布 Navicat 或 DBeaver。详见 [远程应用](../../admin/system_settings/remote_apps.md)。
:::

## 3 批量资产连接

Web 终端支持批量连接资产。在页面左上角展开批量选项，勾选需要连接的资产后，对选中资产批量发起连接操作。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_user_wb_luna_03.png" alt="图 2  批量资产连接" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 2  批量资产连接</div>

## 4 会话管理

### 4.1 会话拖拽

使用 Web Terminal 方式连接资产时，支持对相应的 Tab 窗口手动拖拽，调整排列位置。

### 4.2 会话切换

连接多个资产时，可使用 **ALT + Left / Right** 组合快捷键快速切换到上一个或下一个会话。

### 4.3 会话分屏

连接资产时，可以在一个浏览器界面打开多个会话，并对批量命令的执行结果进行实时查看，方便对会话内容进行对比操作。目前单个会话最多支持 4 个分屏。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_user_wb_luna_04.png" alt="图 3  会话分屏" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 3  会话分屏</div>
