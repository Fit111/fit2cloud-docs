---
title: 功能设置
description: 介绍 JumpServer 系统设置中功能设置页的各项开关与配置，包括公告、工单、作业中心、账号存储、智能问答与虚拟应用。
---

点击页面右上角小齿轮进入 **系统设置** 页面，点击 **功能设置** 即进入功能设置页面。页面顶部按用途分为 **公告**、**工单**、**作业中心**、**账号存储**、**智能问答**、**虚拟应用** 六个部分，用于集中开启或关闭平台级的功能模块，并按各功能的需要完成必要的参数配置。

## 1 公告

点击页面上方的 **公告** 即进入公告设置页面，这里可以自定义是否启用公告功能，并设置公告内容。公告会在 JumpServer 页面全局展示，适合向全部用户广播维护通知、安全提醒等信息。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/V4_systemsetting_feature1.png" alt="图 1  公告设置" />
<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 1  公告设置</div>

启用公告后，公告内容会在页面上显示，效果如下。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/V4_systemsetting_feature2.png" alt="图 2  启用公告效果" />
<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 2  启用公告效果</div>

## 2 工单

启用后，点击页面上方的 **工单** 即进入工单设置页面，可以自定义是否启用工单功能。用户即可通过工单申请资源授权：申请提交后由审批人审批，通过后用户获得所申请资产在申请期限内的权限，到期自动失效。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/V4_systemsetting_feature3.png" alt="图 3  工单设置" />
<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 3  工单设置</div>

启用工单后效果如下。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/V4_systemsetting_feature4.png" alt="图 4  启用工单效果" />
<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 4  启用工单效果</div>

### 2.1 审批流程

工单开启后，还需要为不同场景配置审批规则。工单的审批规则通过 **流程设置** 维护，在工单模块的左侧菜单中点击 **流程设置** 即可进入流程列表，列表中展示每个流程的名称、审批级别、创建者、所属组织与创建日期，并支持编辑与删除；点击 **创建** 即可新增一个审批流程。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_admin_ticket_flow_01.png" alt="图 5  流程设置" />
<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 5  流程设置</div>

创建流程时，先填写流程的 **名称**，并按需要指定 **抄送人**；随后设置 **审批级别**，可选 1 级至 5 级，级别越高，表示该流程需要经过的审批环节越多，即所谓多级审批。选定级别后，下方会出现对应级别的审批配置区域，每一级审批都可以选择 **全部用户**、**指定用户**，或按 **属性筛选** 指定审批人。

属性筛选按「属性名 + 匹配方式 + 属性值」逐条添加，例如将 **系统角色** 设为 **任意包含** **系统管理员**，即由系统管理员承担该级审批；条件可以添加多条，右侧会实时显示匹配到的人数，便于创建前确认审批人范围。配置完成后点击 **提交** 保存；需要连续创建多个流程时，可以使用 **保存并继续添加**。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_admin_ticket_flow_02.png" alt="图 6  多级审批" />
<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 6  多级审批</div>

## 3 作业中心

点击页面上方的 **作业中心** 即进入作业中心设置页面。这里的 **批量命令执行** 选项决定是否允许用户在 **工作台 &gt; 作业中心** 中执行批量命令，作业中心命令黑名单则用于设置在批量命令中不允许使用的命令。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/V4_systemsetting_feature5.png" alt="图 7  作业中心设置" />
<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 7  作业中心设置</div>

## 4 账号存储

点击页面上方的 **账号存储** 即进入账号存储设置页面。账号密钥支持对接 HashiCorp Vault 第三方密钥存储系统：需要在 `config.txt` 配置文件中修改参数 `VAULT_ENABLED = true`，并按照存储引擎配置 `VAULT_BACKEND = [local/hcp/azure/aws]`，然后回到页面完成配置即可。

:::warning[同步前请备份数据]

数据同步是单向的，只会从本地数据库同步到远端 Vault；同步完成后本地数据库不再存储密码，请提前备份好数据。二次修改 Vault 配置后需要重启服务。

:::

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/V4_systemsetting_feature6.png" alt="图 8  账号存储设置" />
<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 8  账号存储设置</div>

## 5 智能问答

点击页面上方的 **智能问答** 即可进入智能问答设置页面。智能问答支持对接 ChatGPT、Deepseek 以及自定义模型服务（自定义模型功能需在 &gt;= V4.10.14 版本中才可使用），开启后即可启动聊天 AI 功能进行智能问答。

使用前需要填写聊天服务的基本地址与 API Key，点击 **保存** 后再点击 **测试**；测试连接成功后，即可开始与智能问答小助手进行对话。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/V4_systemsetting_feature7.png" alt="图 9  智能问答设置" />
<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 9  智能问答设置</div>

## 6 虚拟应用

点击页面上方的 **虚拟应用** 即进入虚拟应用设置页面。JumpServer 支持使用 Linux 系统作为远程应用功能的运行载体，在此页面开启以 Linux 系统为底层的虚拟应用功能，具体使用配置见 [虚拟应用配置说明](virtual_apps.md)。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/V4_systemsetting_feature8.png" alt="图 10  虚拟应用设置" />
<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 10  虚拟应用设置</div>
