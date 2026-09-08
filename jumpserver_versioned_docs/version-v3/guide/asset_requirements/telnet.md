---
title: Telnet
---

:::note[提示]

- JumpServer 通过 Telnet 协议和资产建立连接时，无法确认服务端返回的字符是否表示连接成功，所以需要配正则表达式来确认是否连接成功。
- 需要在 `平台列表`-`创建`-`配置` 选择`telnet协议` 点击右侧 `小齿轮` 在 `平台协议配置：telnet` 中添加成功提示代码。
:::

:::note[通过 `telnet` 命令登录 telnet设备 `成功` 的返回字符串]

- 举例：

```sh
telnet 172.16.0.1
```
```vim
Login authentication  
login: admin  
password: *********  
Info: The max number or VTY users is 10, and the number  
      of current VTY users on line is 1.  
<RA-L7-RD>
<RA-L7-RD> system-view

```

- 把 `&lt;RA-L7-RD&gt;` 写入到 Web "系统设置"-"终端设置"-"Telnet 成功正则表达式" 里面
- `&lt;RA-L7-RD&gt; 正则可用 &lt;.*&gt; 表示 或者 &lt;RA-.*&gt;`
- `RW-F1-1  正则可用 RW-.*`
:::

:::note[不会写正则直接写设备名就行，`设备1名|设备2名|设备3名|设备4名|success|成功`]

- `RW-1F-1|RW-2F-1|RW-3F-1|success|成功`
- `&lt;RA-L7-RD&gt;|&lt;RA-L6-RD&gt;|&lt;RA-L5-RD&gt;|success|成功`
- `&lt;.*&gt;|.*&gt;|success|成功`
:::
