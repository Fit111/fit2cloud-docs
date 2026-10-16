---
title: 离线安装
description: 介绍 1Panel AI 网关的离线安装方式，包括离线包下载、解压安装、登录访问与离线升级，适用于内网与离线机房等无外网环境。
---

## 1 适用场景

离线安装适用于部署服务器**无法访问外网**的内网、离线机房及涉密环境。

- 离线包内已包含运行所需的容器镜像，安装过程**不依赖外网**。
- 社区版不提供 arm 架构离线包，如需在 arm 架构下部署，请采用[在线安装](./online_installation.md)方式。

## 2 环境要求

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"16px 0 8px"}}>表 1  离线部署环境要求</div>
<table style={{display:'table', width:'100%', maxWidth:'100%', tableLayout:'fixed', borderCollapse:'collapse', borderSpacing:'0', border:'1px solid #d9dee8'}}>
<thead>
<tr><th style={{width:'22%', padding:'8px'}}>项目</th><th style={{width:'78%', padding:'8px'}}>要求</th></tr>
</thead>
<tbody>
<tr><td style={{padding:'8px'}}>操作系统</td><td style={{padding:'8px'}}>支持主流 Linux 发行版本（基于 Debian / RedHat，包括国产操作系统）</td></tr>
<tr><td style={{padding:'8px'}}>服务器架构</td><td style={{padding:'8px'}}>x86_64</td></tr>
<tr><td style={{padding:'8px'}}>容器运行时</td><td style={{padding:'8px'}}>Docker；安装过程中脚本会自动检测并完成安装</td></tr>
<tr><td style={{padding:'8px'}}>浏览器</td><td style={{padding:'8px'}}>Chrome、Edge 等现代浏览器</td></tr>
</tbody>
</table>

## 3 端口要求

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"16px 0 8px"}}>表 2  离线部署端口要求</div>
<table style={{display:'table', width:'100%', maxWidth:'100%', tableLayout:'fixed', borderCollapse:'collapse', borderSpacing:'0', border:'1px solid #d9dee8'}}>
<thead>
<tr><th style={{width:'18%', padding:'8px'}}>端口</th><th style={{width:'26%', padding:'8px'}}>作用</th><th style={{width:'56%', padding:'8px'}}>说明</th></tr>
</thead>
<tbody>
<tr><td style={{padding:'8px'}}>22</td><td style={{padding:'8px'}}>SSH</td><td style={{padding:'8px'}}>上传安装包、执行安装与后续维护</td></tr>
<tr><td style={{padding:'8px'}}>8080</td><td style={{padding:'8px'}}>Web 控制台与 API</td><td style={{padding:'8px'}}>默认访问端口，Web 管理界面和数据面 API 共用；如使用云服务器，请确保安全组已开放该端口</td></tr>
</tbody>
</table>

## 4 下载离线包

打开[飞致云开源社区 1Panel AI 网关社区版下载](https://community.fit2cloud.com/#/products/1panel-ai-gateway/downloads)页面，**登录后**下载最新版本的离线安装包。

- 当前最新版本为 **v1.4.0**，安装包文件名为 `1panel-ai-gateway-v1.4.0-linux-amd64.tar.gz`。
- 下载页会同步提供各历史版本的安装包，可按需选择。

下载完成后，将离线包**上传至部署服务器**，下文以 `/tmp` 目录为例说明安装过程。

## 5 安装部署

### 5.1 解压安装包

以 **root 用户**通过 SSH 登录部署服务器，执行以下命令解压：

```bash
cd /tmp
# 请将示例文件名替换为实际下载的安装包名称
tar zxvf 1panel-ai-gateway-v1.4.0-linux-amd64.tar.gz
```

### 5.2 执行安装脚本

```bash
# 进入解压后的目录（目录名与安装包同名）
cd 1panel-ai-gateway-v1.4.0-linux-amd64

# 执行安装脚本
/bin/bash install.sh
```

安装脚本会自动导入离线包内的容器镜像并启动服务。安装完成后，容器名称为 `1panel-ai-gateway`。

## 6 登录访问

安装完成后，通过浏览器访问：

```
http://目标服务器 IP 地址:8080
```

- **用户名**：`admin`
- **密码**：首次启动时在容器日志中输出的一次性临时密码

若未记录临时密码，可在部署服务器上执行以下命令查找：

```bash
docker logs 1panel-ai-gateway 2>&1 | grep "initial administrator created"
```

使用管理员用户名 `admin` 和临时密码登录后，系统会**强制跳转到密码修改页**，设置 6 至 128 个字符的新密码后即可进入管理端。

## 7 健康检查

安装完成后，可使用以下无需登录的接口检查进程与就绪状态：

```bash
curl -fsS http://127.0.0.1:8080/health/live
curl -fsS http://127.0.0.1:8080/health/ready
```

- `/health/live` 返回 `{"status":"ok"}`，表示 HTTP 进程可响应。
- `/health/ready` 返回 `{"status":"ok"}`，表示数据库和网关运行时已就绪。
- 就绪检查失败时返回 503 和 `{"status":"not_ready"}`。

## 8 离线升级

离线升级与安装过程基本一致：下载新版本安装包并上传至部署服务器，解压后再次执行安装脚本即可完成升级。

```bash
cd /tmp
# 请将 <新版本号> 替换为实际下载的版本号
tar zxvf 1panel-ai-gateway-v<新版本号>-linux-amd64.tar.gz
cd 1panel-ai-gateway-v<新版本号>-linux-amd64
/bin/bash install.sh
```

:::warning

**升级前请先备份数据目录**（默认为 `/opt/ai-gateway`），避免升级异常导致数据丢失。

:::

## 9 注意事项

- **请妥善保管离线包**，不要从第三方渠道下载来源不明的所谓「离线包」，避免镜像被篡改。
- **数据目录**默认为 `/opt/ai-gateway`，包含 SQLite 数据库文件与凭据密钥，升级与迁移时需一并处理，详见[配置文件说明](../ops/config_files.md)。
- **忘记管理员密码**时，可在部署服务器上执行以下命令重置：

```bash
docker exec -it 1panel-ai-gateway /usr/bin/ai-gateway reset-admin-password
```

  详细操作请参见[重置管理员密码](../faq/reset-admin-password.md)。
- 离线环境无法访问公有云模型 API 时，需要自行准备本地模型服务（如 vLLM 集群），并通过「账号池」接入。
- 如需使用 PostgreSQL 数据库或 Elasticsearch，请另行准备对应的外部实例，网关不负责其安装与运维。
