---
title: MFA Face Recognition
---

:::note[Note: Face recognition is a flagship edition feature.]

:::
&gt; 1. Version: v4.6.0 and above <br />
&gt; 2. Flagship edition license with 5000+ assets <br />
&gt; 3. HTTPS access enabled

## 1 Configure Face Recognition
:::note

**Add new parameters**
```sh
vim /opt/jumpserver/config/config.txt
#config.txt
USE_XPACK=1
FACE_RECOGNITION_ENABLED=true
FACELIVE_ENABLED=1
```
**Restart JumpServer**
```sh
jmsctl restart
```
:::

## 2 Configure MFA Face Recognition
:::note

- Record facial information on the user detail page and enable MFA.
:::

![image.png](/img/jumpserver/Facelive1.png)

:::note

- Log out and try logging in again, select face verification.
:::
![image.png](/img/jumpserver/Facelive2.png)

:::note

- Complete facial verification within 30 seconds.
:::
![image.png](/img/jumpserver/Facelive3.png)

## 3 Asset connection face recognition and monitoring
:::note

- Enable **Face Verification** in **Console &gt; Access Control &gt; Asset Connection**. The operation can be **Face Verification** or **Face Online**.
:::
![image.png](/img/jumpserver/Facelive4.png)

:::note

- Face verification is required before connecting to an asset.
:::
![image.png](/img/jumpserver/Facelive5.png)

:::note

- If facial recognition does not detect the user, the session will be paused.
- During the paused session, no operations on the asset can be performed.
:::
![image.png](/img/jumpserver/Facelive6.png)
