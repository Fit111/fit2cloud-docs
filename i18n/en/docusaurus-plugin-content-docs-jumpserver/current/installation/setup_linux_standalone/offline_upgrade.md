---
title: Offline Upgrade
---

:::warning[If you want to upgrade JumpServer from V3 to V4, you must first upgrade to the latest version of V3; otherwise, the upgrade will fail!]

:::
| OS/Arch       | Architecture | Linux Kernel | Offline Name                                     |
| :------------ | :----------- | :----------- | :----------------------------------------------- |
| linux/amd64   | x86_64       | &gt;= 4.0       | jumpserver-ce--x86_64.tar.gz |

## 1. Upgrade Deployment

### linux/amd64

:::note

Download the [latest linux/amd64 offline package](https://www.jumpserver.com/#features-JumpServer%20Enterprise%20Edition) from the FIT2CLOUD community, and upload it to the /opt directory of the deployment server.
:::
&gt;  Please contact us for English version offline package download.

    :::note

    ```sh
    cd /opt
    tar -xf jumpserver-ce--x86_64.tar.gz
    cd jumpserver-ce--x86_64
    ```
    ```sh
    ./jmsctl.sh upgrade
    ./jmsctl.sh start
    ```
    :::
