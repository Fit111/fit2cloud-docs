---
title: 用户管理
---


在 SQLBot 中，系统管理员可通过【用户管理】模块，对系统用户进行管理，包括新增、编辑、删除、重置密码、启用/禁用、查询、筛选等操作。


## 1 用户列表


在【用户管理】页面中，展示系统内全部用户，管理员可查看用户基本信息，包括账号、姓名、邮箱、所属工作空间、状态等。


<img src="/img/sqlbot/user_manual/system/userlist.png" alt="用户列表" style={{maxWidth:'720px',width:'100%',display:'block',margin:'16px auto 6px',borderRadius:'4px'}} />
<div style={{fontSize:'14px',color:'#666',margin:'0 0 16px',textAlign:'center'}}>图 1 用户列表</div>

## 2 创建用户


支持系统管理员创建用户：

- 姓名：用户姓名
- 账号：用户账号信息，不支持修改
- 邮箱：用户邮箱
- 工作空间：授权访问的工作空间
- 系统变量：可添加系统变量
- 状态：用户状态，默认为启用状态


<img src="/img/sqlbot/user_manual/system/create_user.png" alt="用户列表" style={{maxWidth:'720px',width:'100%',display:'block',margin:'16px auto 6px',borderRadius:'4px'}} />
<div style={{fontSize:'14px',color:'#666',margin:'0 0 16px',textAlign:'center'}}>图 2 创建用户</div>

## 3 编辑用户


账户不可以编辑，其他属性均可以编辑。用户状态已禁用，则用户无法登录 SQLBot。


<img src="/img/sqlbot/user_manual/system/edit_userinfo.png" alt="用户列表" style={{maxWidth:'720px',width:'100%',display:'block',margin:'16px auto 6px',borderRadius:'4px'}} />
<div style={{fontSize:'14px',color:'#666',margin:'0 0 16px',textAlign:'center'}}>图 3 编辑用户信息</div>

## 4 重置密码


系统管理员可以给每个用户修改密码，在用户列表中，点击【修改密码】，弹出修改密码对话框，保存后修改成功。


<img src="/img/sqlbot/user_manual/system/edit_usermessges.png" alt="用户列表" style={{maxWidth:'720px',width:'100%',display:'block',margin:'16px auto 6px',borderRadius:'4px'}} />
<div style={{fontSize:'14px',color:'#666',margin:'0 0 16px',textAlign:'center'}}>图 4 编辑用户消息</div>

## 5 删除用户


在用户列表中，点击【删除】，弹出提示框，确认后仅删除当前用户，不影响其创建的工作空间资源。

系统管理员可以通过勾选多个指定用户，进行用户的批量删除。删除后，这些用户将从 SQLBot 系统中被彻底删除。

**注意**：系统内置 admin 用户不能被删除。


<img src="/img/sqlbot/user_manual/system/delete_user.png" alt="用户列表" style={{maxWidth:'720px',width:'100%',display:'block',margin:'16px auto 6px',borderRadius:'4px'}} />
<div style={{fontSize:'14px',color:'#666',margin:'0 0 16px',textAlign:'center'}}>图 5 删除用户</div>

<img src="/img/sqlbot/user_manual/system/delete_user2.png" alt="用户列表" style={{maxWidth:'720px',width:'100%',display:'block',margin:'16px auto 6px',borderRadius:'4px'}} />
<div style={{fontSize:'14px',color:'#666',margin:'0 0 16px',textAlign:'center'}}>图 6 删除用户 2</div>

## 6 查询用户


支持按如下方式快速搜索和查询用户：

- 支持输入用户名、姓名、邮箱的关键字进行搜索；

- 支持通过筛选条件（状态、所属工作空间）进行过滤；


<img src="/img/sqlbot/user_manual/system/search_user.png" alt="用户列表" style={{maxWidth:'720px',width:'100%',display:'block',margin:'16px auto 6px',borderRadius:'4px'}} />
<div style={{fontSize:'14px',color:'#666',margin:'0 0 16px',textAlign:'center'}}>图 7 搜索用户</div>

