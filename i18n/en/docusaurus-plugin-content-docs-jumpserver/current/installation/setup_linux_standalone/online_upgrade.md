---
title: Online Upgrade
---

:::warning[If you want to upgrade JumpServer from V3 to V4, you must first upgrade to the latest version of V3; otherwise, the upgrade will fail!]

:::
| OS/Arch       | Architecture | Linux Kernel | Offline Name                                     |
| :------------ | :----------- | :----------- | :----------------------------------------------- |
| linux/amd64   | x86_64       | &gt;= 4.0       | jumpserver-installer-v4.10.17.tar.gz |

## 1. Upgrade Deployment

### Mainland China

:::note

```sh
cd /opt
wget https://resource.fit2cloud.com/jumpserver/installer/releases/download/v4.10.17/jumpserver-installer-v4.10.17.tar.gz
tar -xf jumpserver-installer-v4.10.17.tar.gz
cd jumpserver-installer-v4.10.17
```
:::
### Other Regions

:::note

```sh
cd /opt
wget https://github.com/jumpserver/installer/releases/download/v4.10.17/jumpserver-installer-v4.10.17.tar.gz
tar -xf jumpserver-installer-v4.10.17.tar.gz
cd jumpserver-installer-v4.10.17
```
:::
:::note

```sh
./jmsctl.sh upgrade

# Start JumpServer service
./jmsctl.sh start
```
:::
