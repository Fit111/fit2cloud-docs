---
title: 常见问题
---

本页汇总 1Panel 技术交流群中用户咨询频率较高的常见问题及处理方式，内容持续更新。

## 1 安装部署

### 1.1 1Panel 安装脚本不支持 Anolis 系统怎么办？

**问题**：安装 1Panel 时提示安装脚本不支持 Anolis 系统，该怎么处理？

**处理方式**：

1Panel 安装脚本不支持 Anolis 系统，需更换为受支持的操作系统后再安装。1Panel 支持主流 Linux 发行版本（基于 Debian / RedHat，包括国产操作系统），常规 Ubuntu 等系统均支持。

## 2 主机与系统管理

### 2.1 1Panel 服务无法启动，报 GODEBUG "tlskyber" 错误怎么办？

**问题**：1Panel 服务无法启动，直接执行 `/usr/local/bin/1panel-core` 时报错：

```text
fatal error: removed GODEBUG "tlskyber" set to old value "0" in environment (https://go.dev/doc/godebug#go-124)
```

**处理方式**：

在 `/etc/systemd/system` 目录下的 `1panel-core.service` 与 `1panel-agent.service` 中，分别为 `[Service]` 段补充一行：

```ini
UnsetEnvironment=GODEBUG
```

保存后执行：

```bash
systemctl daemon-reload
systemctl restart 1panel
```

该错误由环境中残留的 `GODEBUG` 变量与新版 Go 运行时不兼容引起，补齐 `UnsetEnvironment=GODEBUG` 后，服务启动时不再把该变量传入 1Panel 进程。

## 3 应用商店与容器

### 3.1 应用安装拉取镜像失败怎么办？

**问题**：安装应用时一直拉取不到镜像、提示 image pull failed，怎么处理？

**处理方式**：

应用安装失败、镜像拉取超时，可在【容器】-【配置】中配置镜像加速器进行优化，加速地址填写 `https://docker.1panel.live`。若配置后拉取应用镜像仍然失败，可在论坛中进一步讨论。

### 3.2 智能路由为什么没有生效？

**问题**：配置了智能路由，但请求没有走智能路由，是什么原因？

**处理方式**：

只有客户端请求使用 `model=auto` 时才会触发智能路由；请求其他模型名时，仍按普通 AI 网关流程转发。

### 3.3 应用商店安装应用后无法访问怎么办？

**问题**：在 1Panel 应用商店安装应用后，外部访问地址该怎么填、为什么装完进不去？

**处理方式**：

安装时需在参数中填写外部访问地址（主机 IP + 应用端口），并确保该端口已在防火墙中放行；若未放行，可在应用安装页面的高级设置中编辑 compose 文件调整端口配置。

## 4 网站与数据库管理
