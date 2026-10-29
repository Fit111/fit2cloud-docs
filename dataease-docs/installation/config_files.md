---
title: 配置文件说明
description: 介绍 DataEase 运行目录中的主要配置文件位置，以及修改 application.yml 等参数后的生效方式。
---

## 1 功能简介

DataEase 安装完成后，运行参数主要保存在安装目录下的配置文件中。日常运维中新增或调整跨域白名单、登录超时、导出限制等参数时，通常编辑 `application.yml`。本文介绍默认配置文件位置、常见配置项，以及修改后如何重启生效。

## 2 前提条件

- 已使用具备服务器权限的账号登录 DataEase 所在主机。
- 已确认安装目录。默认 `DE_BASE=/opt`，运行目录为 `/opt/dataease3.0`；如安装时修改了 `DE_BASE`，请按实际路径替换本文示例。
- 修改配置前建议先备份相关文件。

## 3 配置文件位置

默认运行目录为 `/opt/dataease3.0`。与配置相关的主要路径如下：

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"16px 0 8px"}}>表 1  主要配置文件</div>

<table style={{display:'table', width:'100%', maxWidth:'100%', tableLayout:'fixed', borderCollapse:'collapse', borderSpacing:'0', border:'1px solid #d9dee8'}}>
<thead>
<tr><th style={{width:'28%', padding:'8px', textAlign:'left'}}>文件</th><th style={{width:'42%', padding:'8px', textAlign:'left'}}>默认路径</th><th style={{width:'30%', padding:'8px', textAlign:'left'}}>说明</th></tr>
</thead>
<tbody>
<tr><td style={{padding:'8px'}}><code>application.yml</code></td><td style={{padding:'8px'}}><code>/opt/dataease3.0/conf/application.yml</code></td><td style={{padding:'8px'}}>主配置文件，运行期参数多在此调整</td></tr>
<tr><td style={{padding:'8px'}}><code>application-&lt;profile&gt;.yml</code></td><td style={{padding:'8px'}}><code>/opt/dataease3.0/conf/application-mysql.yml</code> 等</td><td style={{padding:'8px'}}>按数据库类型引入的 JPA 等配置，由安装脚本生成</td></tr>
<tr><td style={{padding:'8px'}}><code>mysql.env</code></td><td style={{padding:'8px'}}><code>/opt/dataease3.0/conf/mysql.env</code></td><td style={{padding:'8px'}}>内置数据库相关环境变量（如密码）</td></tr>
<tr><td style={{padding:'8px'}}><code>.env</code></td><td style={{padding:'8px'}}><code>/opt/dataease3.0/.env</code></td><td style={{padding:'8px'}}>安装生成的 <code>DE_*</code> 环境变量，供 compose 与配置替换使用</td></tr>
<tr><td style={{padding:'8px'}}><code>install.conf</code></td><td style={{padding:'8px'}}>安装包目录内</td><td style={{padding:'8px'}}>仅安装前使用；安装完成后日常改参一般不改此文件</td></tr>
</tbody>
</table>

:::note[与 v2 路径的区别]
DataEase v2 默认运行目录为 `/opt/dataease2.0`，对应配置文件为 `/opt/dataease2.0/conf/application.yml`。当前文档面向 v3，默认路径为 `/opt/dataease3.0/conf/application.yml`。
:::

容器内通过 Spring 额外配置目录加载宿主机的 `conf`（挂载为 `/opt/apps/config`），因此在宿主机编辑 `/opt/dataease3.0/conf/` 下文件即可。

## 4 编辑 application.yml

运行期需要新增或修改的业务参数，优先编辑：

```sh
/opt/dataease3.0/conf/application.yml
```

1. 备份原文件：

```sh
cp /opt/dataease3.0/conf/application.yml /opt/dataease3.0/conf/application.yml.bak.$(date +%F)
```

2. 编辑配置，例如：

```sh
vi /opt/dataease3.0/conf/application.yml
```

3. 保存后重启服务使配置生效：

```sh
dectl restart
```

4. 确认服务状态：

```sh
dectl status
```

:::warning[修改后需重启]
直接修改 `application.yml` 后须执行 `dectl restart`（或等价的服务重启）才会生效。命令说明见 [命令行工具](./cli.md)。
:::

## 5 常见配置示例

安装模板中的业务参数多位于 `dataease:` 节点下，并通过环境变量注入。以下为常见场景说明。

### 5.1 嵌入式跨域白名单（origin-list）

Iframe / DIV 嵌入时，需在 `application.yml` 中配置允许的来源地址。可直接维护 `dataease.origin-list`，或多个地址以逗号分隔。修改后执行 `dectl restart`。更多说明见 [嵌入式常见问题](../embedded/question.md)。

### 5.2 登录超时

对应安装参数 `DE_LOGIN_TIMEOUT`（单位：分钟）。运行目录中的 `application.yml` 通过 `dataease.login_timeout` 引用该值；也可按实际部署方式在配置文件中调整后重启。

### 5.3 导出限制

视图、数据集导出条数上限对应 `dataease.export.views.limit`、`dataease.export.dataset.limit`（安装参数为 `DE_EXPORT_VIEWS_LIMIT`、`DE_EXPORT_DATASET_LIMIT`）。

## 6 安装参数与运行配置的关系

- **安装前**：可在安装包中的 `install.conf` 设置 `DE_BASE`、`DE_PORT`、数据库、`DE_ORIGIN_LIST` 等；执行 `install.sh` 时会写入运行目录的 `.env`，并生成 `conf/` 下配置。
- **安装后**：日常增改运行参数，请编辑 `/opt/dataease3.0/conf/application.yml`（及必要的 `application-<profile>.yml`），然后 `dectl restart`。
- **外部数据库**：优先通过安装时的 `install.conf` / 交互选择完成；安装后变更库连接请参考 [外部数据库部署](./multi_database_deployment.md)，并重启服务。

## 7 后续操作

- 命令行启停、清理日志见 [命令行工具](./cli.md)。
- 嵌入相关配置示例见 [嵌入式常见问题](../embedded/question.md)。
