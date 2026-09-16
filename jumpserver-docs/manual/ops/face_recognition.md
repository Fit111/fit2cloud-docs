---
title: 人脸识别运维设置
description: 介绍 JumpServer 人脸识别（MFA Facelive）功能的服务端配置方法、前提条件与相关参数。
---

人脸识别（MFA Facelive）在登录、连接资产等场景中通过人脸比对完成身份验证。该功能为**旗舰版功能**，需要在服务端完成以下配置后才能使用。

## 1 前提条件

- 旗舰版许可证 5000 个以上的资产
- 启用 HTTPS 访问

## 2 配置 Faclive

在 JumpServer 安装目录下编辑 `config.txt`：

```sh
vim /opt/jumpserver/config/config.txt
```

新增以下参数：

```sh
#config.txt
USE_XPACK=1
FACE_RECOGNITION_ENABLED=true
FACELIVE_ENABLED=1
```

## 3 重启 JumpServer

保存配置后重启 JumpServer 服务，使配置生效：

```sh
jmsctl restart
```
