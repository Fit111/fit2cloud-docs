---
title: 连接设置
---


- 点击客户端右上角的设置按钮，可以打开连接设置页面。

## 通用


- 该页面可以调整客户端的 **语言**、**字符集**、**字符终端设置**、**分辨率**。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/clientV4_10.png" alt="图 1  通用设置" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 1  通用设置</div>

## 外观


- 该页面可调整客户端的 **外观颜色**、**主色**、**字体**。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/clientV4_11.png" alt="图 2  外观设置" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 2  外观设置</div>

## 应用配置

### 命令行终端

**SSH**


- 该页面可以调整通过 SSH 协议连接资产的本地应用配置。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/clientV4_06.png" alt="图 3  SSH 应用配置" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 3  SSH 应用配置</div>

**Telnet**


- 该页面可以调整通过 Telnet 协议测试端口连接的本地应用配置，具体页面与 SSH 类似。

### 文件传输

**SFTP**


- 该页面可以调整通过 SFTP 协议传输文件的本地应用配置。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/clientV4_07.png" alt="图 4  SFTP 应用配置" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 4  SFTP 应用配置</div>

### 远程桌面

**RDP**


- 该页面可以调整通过 RDP 协议连接资产的本地应用配置。
- Windows 用户默认为本地 MSTSC 应用，Mac 用户默认为 Microsoft Remote Desktop 应用，需要在系统定义 rdp 文件的打开方式。Linux 用户需要自行安装配置 Remmina 或者 XFreeRDP。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/clientV4_08.png" alt="图 5  RDP 应用配置" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 5  RDP 应用配置</div>

**VNC**


- 该页面可以调整通过 VNC 协议连接资产的本地应用配置，具体页面与 RDP 类似。

### 数据库


- 该页面可以调整连接数据库资产的本地应用配置，支持 MySQL、MariaDB、MongoDB、Redis、PostgreSQL、Oracle、SQL Server 数据库。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/clientV4_09.png" alt="图 6  数据库应用配置" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 6  数据库应用配置</div>

