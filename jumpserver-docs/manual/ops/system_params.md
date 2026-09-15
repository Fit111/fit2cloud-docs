---
title: 系统参数设置
description: 介绍如何通过 config.txt 调整 JumpServer Core 运行参数，以及各参数含义。
---

## 1 功能简介

系统参数写在安装目录的 `config.txt` 中，控制数据库、Redis、日志、会话 Cookie、认证跳转、Syslog、录像存储等。默认路径：

```sh
/opt/jumpserver/config/config.txt
```

## 2 前提条件

- 已使用具备服务器权限的账号登录 JumpServer 所在主机。
- 已备份当前 `config.txt`。
- 修改前须停止 JumpServer 服务，避免写到一半导致组件连不上。

:::warning[修改前先停止服务]
先执行 `./jmsctl.sh stop`，改完配置再 `./jmsctl.sh start` 或 `./jmsctl.sh restart`。命令说明见 [命令行工具](./cli_tools.md)。
:::

## 3 编辑配置

1. 进入安装目录（常见为 `/opt/jumpserver`）。
2. 停止服务。
3. 打开配置文件：

```sh
vi /opt/jumpserver/config/config.txt
```

4. 保存后启动或重启服务。
5. 执行 `./jmsctl.sh status` 确认组件正常。

也可用 `./jmsctl.sh config env` 调整环境变量，效果与直接编辑 `config.txt` 相同，改完同样需要重启。

## 4 Core 参数说明

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"16px 0 8px"}}>表 1  Core 参数说明</div>

<table style={{display:'table', width:'100%', maxWidth:'100%', tableLayout:'fixed', borderCollapse:'collapse', borderSpacing:'0', border:'1px solid #d9dee8'}}>
<thead>
<tr><th style={{width:'22%', padding:'8px', textAlign:'left'}}>参数名称</th><th style={{width:'16%', padding:'8px', textAlign:'left'}}>默认值</th><th style={{width:'18%', padding:'8px', textAlign:'left'}}>可选项</th><th style={{width:'44%', padding:'8px', textAlign:'left'}}>说明</th></tr>
</thead>
<tbody>
<tr><td style={{padding:'8px'}}>SECRET_KEY</td><td style={{padding:'8px'}}>''</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>用于对敏感字段进行加解密的 Key</td></tr>
<tr><td style={{padding:'8px'}}>BOOTSTRAP_TOKEN</td><td style={{padding:'8px'}}>''</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>用于组件向 Core 服务注册使用的 Token</td></tr>
<tr><td style={{padding:'8px'}}>DEBUG</td><td style={{padding:'8px'}}>false</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>Debug 模式，如果开启页面请求 API 报错时会显示更多信息</td></tr>
<tr><td style={{padding:'8px'}}>DEBUG_DEV</td><td style={{padding:'8px'}}>false</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>Debug 开发模式，如果开启后端日志会显示更多信息</td></tr>
<tr><td style={{padding:'8px'}}>LOG_LEVEL</td><td style={{padding:'8px'}}>DEBUG</td><td style={{padding:'8px'}}>DEBUG <br /> INFO <br /> WARNING <br /> ERROR <br /> CRITICAL</td><td style={{padding:'8px'}}>日志级别</td></tr>
<tr><td style={{padding:'8px'}}>LOG_DIR</td><td style={{padding:'8px'}}>/data/jumpserver/core/logs</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>日志目录</td></tr>
<tr><td style={{padding:'8px'}}>DB_ENGINE</td><td style={{padding:'8px'}}>mysql</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>数据库引擎</td></tr>
<tr><td style={{padding:'8px'}}>DB_NAME</td><td style={{padding:'8px'}}>jumpserver</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>数据库名</td></tr>
<tr><td style={{padding:'8px'}}>DB_HOST</td><td style={{padding:'8px'}}>127.0.0.1</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>数据库地址</td></tr>
<tr><td style={{padding:'8px'}}>DB_PORT</td><td style={{padding:'8px'}}>3306</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>数据库端口</td></tr>
<tr><td style={{padding:'8px'}}>DB_USER</td><td style={{padding:'8px'}}>root</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>数据库用户</td></tr>
<tr><td style={{padding:'8px'}}>DB_PASSWORD</td><td style={{padding:'8px'}}>''</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>数据库用户密码</td></tr>
<tr><td style={{padding:'8px'}}>DB_USE_SSL</td><td style={{padding:'8px'}}>false</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>数据库启用 SSL 方式</td></tr>
<tr><td style={{padding:'8px'}}>REDIS_HOST</td><td style={{padding:'8px'}}>127.0.0.1</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>Redis 地址</td></tr>
<tr><td style={{padding:'8px'}}>REDIS_PORT</td><td style={{padding:'8px'}}>6379</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>Redis 端口</td></tr>
<tr><td style={{padding:'8px'}}>REDIS_PASSWORD</td><td style={{padding:'8px'}}>''</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>Redis 密码</td></tr>
<tr><td style={{padding:'8px'}}>REDIS_USE_SSL</td><td style={{padding:'8px'}}>false</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>Redis 启用 SSL 方式</td></tr>
<tr><td style={{padding:'8px'}}>REDIS_SSL_KEY</td><td style={{padding:'8px'}}>null</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>Redis SSL Key</td></tr>
<tr><td style={{padding:'8px'}}>REDIS_SSL_CERT</td><td style={{padding:'8px'}}>null</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>Redis SSL Cert 证书</td></tr>
<tr><td style={{padding:'8px'}}>REDIS_SSL_CA</td><td style={{padding:'8px'}}>null</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>Redis SSL CA Cert 证书</td></tr>
<tr><td style={{padding:'8px'}}>REDIS_SSL_REQUIRED</td><td style={{padding:'8px'}}>null</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>Redis SSL 证书是否必须</td></tr>
<tr><td style={{padding:'8px'}}>REDIS_MAX_CONNECTIONS</td><td style={{padding:'8px'}}>100</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>Redis 最大连接数</td></tr>
<tr><td style={{padding:'8px'}}>REDIS_SENTINEL_HOSTS</td><td style={{padding:'8px'}}>''</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>Redis 哨兵地址（多个地址使用 / 分割）</td></tr>
<tr><td style={{padding:'8px'}}>REDIS_SENTINEL_PASSWORD</td><td style={{padding:'8px'}}>''</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>Redis 哨兵密码</td></tr>
<tr><td style={{padding:'8px'}}>REDIS_SENTINEL_SOCKET_TIMEOUT</td><td style={{padding:'8px'}}>null</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>Redis 哨兵 Socket 超时时间</td></tr>
<tr><td style={{padding:'8px'}}>REDIS_DB_CELERY</td><td style={{padding:'8px'}}>3</td><td style={{padding:'8px'}}>0-15</td><td style={{padding:'8px'}}>Redis 库编号，Celery 任务使用</td></tr>
<tr><td style={{padding:'8px'}}>REDIS_DB_CACHE</td><td style={{padding:'8px'}}>4</td><td style={{padding:'8px'}}>0-15</td><td style={{padding:'8px'}}>Redis 库编号，缓存使用</td></tr>
<tr><td style={{padding:'8px'}}>REDIS_DB_SESSION</td><td style={{padding:'8px'}}>5</td><td style={{padding:'8px'}}>0-15</td><td style={{padding:'8px'}}>Redis 库编号，用户 Session 使用</td></tr>
<tr><td style={{padding:'8px'}}>REDIS_DB_WS</td><td style={{padding:'8px'}}>6</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>Redis 库编号，WebSocket 使用</td></tr>
<tr><td style={{padding:'8px'}}>TOKEN_EXPIRATION</td><td style={{padding:'8px'}}>3600 * 24（s）</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>通过 API 创建用户 Token 的有效期；配置为空或 0 时默认 3600</td></tr>
<tr><td style={{padding:'8px'}}>DEFAULT_EXPIRED_YEARS</td><td style={{padding:'8px'}}>70（year）</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>创建资源的默认过期年份，例如授权规则，不允许修改</td></tr>
<tr><td style={{padding:'8px'}}>SESSION_COOKIE_DOMAIN</td><td style={{padding:'8px'}}>null</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>用户 Session Cookie 域，例如 fit2cloud.com</td></tr>
<tr><td style={{padding:'8px'}}>CSRF_COOKIE_DOMAIN</td><td style={{padding:'8px'}}>null</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>用户 CSRF Cookie 域，默认与 SESSION_COOKIE_DOMAIN 保持一致</td></tr>
<tr><td style={{padding:'8px'}}>SESSION_COOKIE_NAME_PREFIX</td><td style={{padding:'8px'}}>null</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>Session Cookie 的名称前缀</td></tr>
<tr><td style={{padding:'8px'}}>SESSION_COOKIE_AGE</td><td style={{padding:'8px'}}>3600 * 24（s）</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>用户 Session Cookie 的有效期</td></tr>
<tr><td style={{padding:'8px'}}>SESSION_EXPIRE_AT_BROWSER_CLOSE</td><td style={{padding:'8px'}}>false</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>用户 Session 在浏览器关闭后过期</td></tr>
<tr><td style={{padding:'8px'}}>CONNECTION_TOKEN_ONETIME_EXPIRATION</td><td style={{padding:'8px'}}>5 * 60</td><td style={{padding:'8px'}}>&gt;= 5 * 60</td><td style={{padding:'8px'}}>有效期内 ConnectionToken 只能使用一次</td></tr>
<tr><td style={{padding:'8px'}}>CONNECTION_TOKEN_REUSABLE_EXPIRATION</td><td style={{padding:'8px'}}>3600 * 24 * 30（s）</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>有效期内 ConnectionToken 可以多次使用</td></tr>
<tr><td style={{padding:'8px'}}>CONNECTION_TOKEN_REUSABLE</td><td style={{padding:'8px'}}>false</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>ConnectionToken 是否可以多次使用</td></tr>
<tr><td style={{padding:'8px'}}>AUTH_CUSTOM</td><td style={{padding:'8px'}}>false</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>开启自定义用户认证</td></tr>
<tr><td style={{padding:'8px'}}>AUTH_CUSTOM_FILE_MD5</td><td style={{padding:'8px'}}>''</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>自定义用户认证的文件 md5 值</td></tr>
<tr><td style={{padding:'8px'}}>MFA_CUSTOM</td><td style={{padding:'8px'}}>false</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>开启自定义 MFA 认证</td></tr>
<tr><td style={{padding:'8px'}}>MFA_CUSTOM_FILE_MD5</td><td style={{padding:'8px'}}>''</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>自定义 MFA 认证的文件 md5 值</td></tr>
<tr><td style={{padding:'8px'}}>AUTH_TEMP_TOKEN</td><td style={{padding:'8px'}}>false</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>开启临时密码功能</td></tr>
<tr><td style={{padding:'8px'}}>AUTH_SSO</td><td style={{padding:'8px'}}>false</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>启用 SSO 认证</td></tr>
<tr><td style={{padding:'8px'}}>AUTH_SSO_AUTHKEY_TTL</td><td style={{padding:'8px'}}>60 * 15（s）</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>SSO 认证密钥 TTL</td></tr>
<tr><td style={{padding:'8px'}}>LOGIN_REDIRECT_TO_BACKEND</td><td style={{padding:'8px'}}>''</td><td style={{padding:'8px'}}>Direct（直接进入内部登录页面） <br /> OpenID <br /> CAS <br /> SAML2 <br /> OAuth2 的服务提供商名称</td><td style={{padding:'8px'}}>开启第三方认证后，不出现倒计时跳转页面，直接跳转到认证服务</td></tr>
<tr><td style={{padding:'8px'}}>LOGIN_REDIRECT_MSG_ENABLED</td><td style={{padding:'8px'}}>true</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>开启第三方跳转倒计时页面</td></tr>
<tr><td style={{padding:'8px'}}>SYSLOG_ADDR</td><td style={{padding:'8px'}}>''</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>SysLog 服务地址</td></tr>
<tr><td style={{padding:'8px'}}>SYSLOG_FACILITY</td><td style={{padding:'8px'}}>user</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>SysLog FACILITY</td></tr>
<tr><td style={{padding:'8px'}}>SYSLOG_SOCKTYPE</td><td style={{padding:'8px'}}>2</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>SysLog SockType</td></tr>
<tr><td style={{padding:'8px'}}>PERM_EXPIRED_CHECK_PERIODIC</td><td style={{padding:'8px'}}>60 * 60（s）</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>校验过期的资产授权规则并过期用户授权树的周期</td></tr>
<tr><td style={{padding:'8px'}}>LANGUAGE_CODE</td><td style={{padding:'8px'}}>en</td><td style={{padding:'8px'}}>zh <br /> en <br /> ja</td><td style={{padding:'8px'}}>语言</td></tr>
<tr><td style={{padding:'8px'}}>TIME_ZONE</td><td style={{padding:'8px'}}>Asia/Shanghai</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>时区</td></tr>
<tr><td style={{padding:'8px'}}>SESSION_COOKIE_SECURE</td><td style={{padding:'8px'}}>false</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>用户 Session Cookie 安全模式，开启后只允许在 https 协议下发送</td></tr>
<tr><td style={{padding:'8px'}}>DOMAINS</td><td style={{padding:'8px'}}>''</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>指定 JumpServer 应用程序允许的域名</td></tr>
<tr><td style={{padding:'8px'}}>CSRF_COOKIE_SECURE</td><td style={{padding:'8px'}}>false</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>用户 CSRF Token 安全模式，开启后只允许在 https 协议下发送</td></tr>
<tr><td style={{padding:'8px'}}>REFERER_CHECK_ENABLED</td><td style={{padding:'8px'}}>false</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>是否开启 REFERER 校验</td></tr>
<tr><td style={{padding:'8px'}}>CSRF_TRUSTED_ORIGINS</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>CSRF 同源信任，多个地址使用逗号分割</td></tr>
<tr><td style={{padding:'8px'}}>SESSION_ENGINE</td><td style={{padding:'8px'}}>cache</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>用户 Session 引擎</td></tr>
<tr><td style={{padding:'8px'}}>SESSION_SAVE_EVERY_REQUEST</td><td style={{padding:'8px'}}>true</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>每个请求都要保存用户 Session</td></tr>
<tr><td style={{padding:'8px'}}>SESSION_EXPIRE_AT_BROWSER_CLOSE_FORCE</td><td style={{padding:'8px'}}>false</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>浏览器关闭后强制过期用户 Session</td></tr>
<tr><td style={{padding:'8px'}}>SERVER_REPLAY_STORAGE</td><td style={{padding:'8px'}}>空对象</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>服务端录像存储。组件上传录像到 Core 后，Core 自动上传到配置的对象存储</td></tr>
<tr><td style={{padding:'8px'}}>CHANGE_AUTH_PLAN_SECURE_MODE_ENABLED</td><td style={{padding:'8px'}}>true</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>改密计划安全模式。启用后不支持用户改自己的密文；禁用后支持，例如 root 改 root</td></tr>
<tr><td style={{padding:'8px'}}>SECURITY_VIEW_AUTH_NEED_MFA</td><td style={{padding:'8px'}}>true</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>查看密文等操作是否需要校验 MFA</td></tr>
<tr><td style={{padding:'8px'}}>SECURITY_DATA_CRYPTO_ALGO</td><td style={{padding:'8px'}}>null</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>数据加密算法</td></tr>
<tr><td style={{padding:'8px'}}>GMSSL_ENABLED</td><td style={{padding:'8px'}}>false</td><td style={{padding:'8px'}}>true <br /> false</td><td style={{padding:'8px'}}>开启国密算法。若与 SECURITY_DATA_CRYPTO_ALGO 同时配置，优先使用 SECURITY_DATA_CRYPTO_ALGO</td></tr>
<tr><td style={{padding:'8px'}}>OPERATE_LOG_ELASTICSEARCH_CONFIG</td><td style={{padding:'8px'}}>空对象</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>操作日志「变更字段」的 Elasticsearch 配置</td></tr>
<tr><td style={{padding:'8px'}}>MAGNUS_ORACLE_PORTS</td><td style={{padding:'8px'}}>30000-30030</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>Magnus 组件需要监听的 Oracle 端口范围</td></tr>
<tr><td style={{padding:'8px'}}>APPLET_DOWNLOAD_HOST</td><td style={{padding:'8px'}}>''</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>Applet 等软件的下载地址</td></tr>
<tr><td style={{padding:'8px'}}>FTP_FILE_MAX_STORE</td><td style={{padding:'8px'}}>0</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>FTP 文件上传下载备份阈值，单位 MB；小于等于 0 时不备份</td></tr>
<tr><td style={{padding:'8px'}}>MAX_LIMIT_PER_PAGE</td><td style={{padding:'8px'}}>10000</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>允许的最大导出记录数</td></tr>
<tr><td style={{padding:'8px'}}>FILE_UPLOAD_SIZE_LIMIT_MB</td><td style={{padding:'8px'}}>200</td><td style={{padding:'8px'}}>—</td><td style={{padding:'8px'}}>文件上传大小上限，单位 MB</td></tr>
<tr><td style={{padding:'8px'}}>THROTTLE_RATES_ANON</td><td style={{padding:'8px'}}>60/min</td><td style={{padding:'8px'}}>string</td><td style={{padding:'8px'}}>未登录用户访问限流</td></tr>
<tr><td style={{padding:'8px'}}>THROTTLE_RATES_USER</td><td style={{padding:'8px'}}>180/min</td><td style={{padding:'8px'}}>string</td><td style={{padding:'8px'}}>用户访问限流</td></tr>
<tr><td style={{padding:'8px'}}>THROTTLE_RATES_SERVICE_ACCOUNT</td><td style={{padding:'8px'}}>300/min</td><td style={{padding:'8px'}}>string</td><td style={{padding:'8px'}}>组件账号访问限流</td></tr>
</tbody>
</table>

:::note[JSON 类参数]
`SERVER_REPLAY_STORAGE`、`OPERATE_LOG_ELASTICSEARCH_CONFIG` 须填写合法 JSON。示例结构见安装部署中的 [参数说明](../env.md)。配错会导致服务起不来，改前请备份文件。
:::

## 5 后续操作

- 应用日志、Syslog、会话命令与录像见 [日志存储配置](./log_storage.md)。
- 启停命令见 [命令行工具](./cli_tools.md)。
