---
title: 数据备份
description: 介绍 JDMC 数据备份的备份对象、备份记录与备份设置中的远端 SFTP 配置。
---

## 1 功能概述

数据备份用于备份服务器上的关键数据，包含 **配置文件**、**数据库**、**系统日志**、**操作录像** 四个页签，页面右上角提供 **备份设置** 入口。

路径：登录后选择 **系统设置 > 设备管理**，进入 JDMC 控制台后，在左侧菜单选择 **数据备份**。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_jdmc_backup_01.png" alt="图 1  配置文件备份" />
<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 1  配置文件备份</div>

## 2 备份对象

四个页签分别对应一类备份对象，页面结构与操作方式一致。每个页签顶部以 **配置文件备份**、**数据库备份**、**系统日志备份**、**操作录像备份** 标识当前对象，并显示该对象的备份状态与 **自动备份** 开关，右侧提供 **立即备份** 按钮。未开启定时备份时，状态提示 **监测备份已禁用**。

## 3 备份记录

**备份记录** 区展示当前对象的备份历史，右上角提供搜索框（**搜索备份时间、SFTP 路径、状态或哈希值**）、**批量删除**、**同步SFTP**、**上传恢复** 与刷新操作。**批量删除** 用于删除已勾选的备份记录，按钮上会显示当前已勾选数量。

备份记录列表按以下列展示：

<table style={{display:'table', width:'100%', maxWidth:'100%', tableLayout:'fixed', borderCollapse:'collapse', borderSpacing:'0', border:'1px solid #d9dee8'}}>
<thead>
<tr><th style={{width:'25%', padding:'8px'}}>列</th><th style={{width:'75%', padding:'8px'}}>说明</th></tr>
</thead>
<tbody>
<tr><td style={{padding:'8px'}}>时间</td><td style={{padding:'8px'}}>备份执行时间</td></tr>
<tr><td style={{padding:'8px'}}>SFTP 路径</td><td style={{padding:'8px'}}>备份文件在 SFTP 上的存放路径</td></tr>
<tr><td style={{padding:'8px'}}>哈希值</td><td style={{padding:'8px'}}>备份文件校验值</td></tr>
<tr><td style={{padding:'8px'}}>备份方式</td><td style={{padding:'8px'}}>触发该次备份的方式</td></tr>
<tr><td style={{padding:'8px'}}>状态</td><td style={{padding:'8px'}}>备份执行结果</td></tr>
<tr><td style={{padding:'8px'}}>操作</td><td style={{padding:'8px'}}>该条备份记录可执行的操作</td></tr>
</tbody>
</table>

## 4 备份设置

点击页面右上角 **备份设置**，在 **编辑备份配置** 弹窗中配置远端 SFTP 与备份触发策略。弹窗包含 **SFTP 主机列表**、**触发策略**、**通知与安全** 三个子页签，其中 **SFTP 主机列表** 通过 **添加主机** 维护用于存放备份文件的 SFTP 服务器。配置完成后点击 **保存** 生效。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_jdmc_backup_02.png" alt="图 2  编辑备份配置" />
<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 2  编辑备份配置</div>
