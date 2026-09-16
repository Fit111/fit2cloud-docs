---
title: 作业管理
description: 介绍 JumpServer 工作台作业中心中脚本作业与 Playbook 作业的用途与创建方式。
---

**作业管理** 用于创建可以重复执行的脚本作业或 Playbook 作业。把常用的批量操作保存成作业之后，执行目标、运行用户与脚本内容整体复用，每次运行不必重新填写命令，适合例行巡检、批量配置下发这类需要反复执行的任务。

## 1 功能简介

作业管理位于 **工作台 > 作业中心 > 作业管理**：登录后将控制台切换到 **工作台**，在左侧选择 **作业中心 > 作业管理** 即可进入。

页面按类型分为 **脚本管理** 与 **Playbook管理** 两个页签，列表列字段包括名称、类型、资产数、花费时间、汇总、最后运行日期及操作，从列表即可看出每个作业覆盖的资产规模与最近一次运行情况。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_admin_wb_job_01.png" alt="图 1  作业管理" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 1  作业管理</div>

:::note[作业中心需开启]
作业中心需由系统管理员在 [功能设置](../../../admin/system_settings/feature_settings.md) 中开启。创建 Playbook 作业前，需先在 [模板管理](./templates_management.md) 中准备好 Playbook 模板。
:::

## 2 前提条件

使用作业管理前，需要先以工作台账号登录 JumpServer，并且作业中心功能已开启；创建 Playbook 作业之前，还需要在模板管理中已有可用的 Playbook 模板。

## 3 创建作业

在 **脚本管理** 或 **Playbook管理** 页签下单击 **创建**，在弹出的抽屉中填写各项内容后提交即可。以 Playbook 作业为例，抽屉标题为 **创建作业管理**，各字段的含义如表 1 所示。

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"16px 0 8px"}}>表 1  作业参数说明</div>
<table style={{display:'table', width:'100%', maxWidth:'100%', tableLayout:'fixed', borderCollapse:'collapse', borderSpacing:'0', border:'1px solid #d9dee8'}}>
<thead>
<tr><th style={{width:'28%', padding:'8px'}}>参数</th><th style={{width:'72%', padding:'8px'}}>说明</th></tr>
</thead>
<tbody>
<tr><td style={{padding:'8px'}}>名称</td><td style={{padding:'8px'}}>作业名称。</td></tr>
<tr><td style={{padding:'8px'}}>资产、节点</td><td style={{padding:'8px'}}>作业的执行目标，可按资产或节点选择。</td></tr>
<tr><td style={{padding:'8px'}}>运行用户</td><td style={{padding:'8px'}}>命令在目标资产上使用的登录账号。</td></tr>
<tr><td style={{padding:'8px'}}>运行用户策略</td><td style={{padding:'8px'}}>资产上没有该运行用户时采取的账号选择策略：跳过、特权账号优先或仅限特权账号。</td></tr>
<tr><td style={{padding:'8px'}}>Playbook</td><td style={{padding:'8px'}}>Playbook 作业所使用的模板，从模板管理中选择已有模板。</td></tr>
<tr><td style={{padding:'8px'}}>变量</td><td style={{padding:'8px'}}>模板中使用的变量，可单击 <strong>新增</strong> 逐条添加变量名与默认值。</td></tr>
<tr><td style={{padding:'8px'}}>超时时间 (秒)</td><td style={{padding:'8px'}}>单次执行的超时时间，填写 -1 时不指定超时时间。</td></tr>
<tr><td style={{padding:'8px'}}>周期执行</td><td style={{padding:'8px'}}>按设定的计划重复运行该作业。</td></tr>
<tr><td style={{padding:'8px'}}>备注</td><td style={{padding:'8px'}}>作业的说明信息，可按需填写。</td></tr>
</tbody>
</table>

填写完成后单击 **提交** 保存作业；需要连续创建多个作业时可以使用 **保存并继续添加**，希望保存后立即执行则使用 **保存后执行**。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/jumpserver/v5_admin_wb_job_02.png" alt="图 2  创建 Playbook 作业" />

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 2  创建 Playbook 作业</div>
