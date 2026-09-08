---
title: Database Migration
---

:::warning[Note]

- Be sure to backup before migration.
- Starting from v2.5, MySQL &gt;= 5.7 is required
- It is recommended to use external databases for convenient expansion and upgrade.
:::

## 1 Database Requirements
:::note

- Version requirements for MySQL/MariaDB and Redis are as follows:
:::
  
:::note

| DB      | Version | Cache | Version | v4.10.17 | :------ | :------ | :---- | :------ |
| MySQL   | &gt;= 5.7  | Redis | &gt;= 6.0  |
| MariaDB | &gt;= 10.6 |  -    |   -     |
:::

## 2 Operation Process
:::note[Backup Database]

### Manual Deployment
:::

```sh
cp -r /opt/jumpserver /opt/jumpserver_bak
mysqldump -uroot -p jumpserver > /opt/jumpserver.sql
```
    ### Containerized Components

```sh
docker exec -it jms_db /bin/bash
cd /opt/jumpserver/data
mysqldump -uroot -p jumpserver > /opt/jumpserver.sql
```
    ### Using setuptools

```sh
cd /opt/jumpserver
./jms backup_db
```
    ### Docker Deployment

```sh
docker exec jms_db /bin/bash -c 'mysqldump -uroot -ppassword jumpserver > /opt/jumpserver.sql'
docker cp jms_db:/opt/jumpserver.sql /opt/
```
    ### Docker Compose

```sh
docker-compose exec -T db /bin/bash -c 'mysqldump -uroot -ppassword jumpserver > /opt/jumpserver.sql'
docker cp jms_db:/opt/jumpserver.sql /opt/
```
    ### JumpServer Installer

```sh
cd /opt/jumpserver-installer-version
./jmsctl.sh backup_db
```
:::note[Modify Database Character Set]

```sh
if grep -q 'COLLATE=utf8_bin' /opt/jumpserver.sql; then
    cp /opt/jumpserver.sql /opt/jumpserver_bak.sql
    sed -i 's@COLLATE utf8_bin@@g' /opt/jumpserver.sql
else
    echo "Database character set is correct";
fi
```
:::

:::note[Migrate to New Server]

- Copy the exported /opt/jumpserver.sql to the new server.
- The following example takes migration to another CentOS7 server as an example. In actual operation, please replace the corresponding commands as needed.

### Migrate to MariaDB 10.6
:::

```sh
# Install MariaDB
yum -y install mariadb-server
systemctl start mariadb
systemctl enable mariadb

# Import database
mysql -uroot < /opt/jumpserver.sql

# Verify import success
mysql -uroot -e 'use jumpserver; select * from users_user;'
```
    ### Migrate to MySQL 5.7

```sh
# Install MySQL 5.7
yum -y install mysql-community-server

# Start MySQL
systemctl start mysqld
systemctl enable mysqld

# Import database
mysql -uroot -p < /opt/jumpserver.sql

# Verify import success
mysql -uroot -p -e 'use jumpserver; select * from users_user;'
```
    ### Migrate to MySQL 8.0

```bash
# Install MySQL 8.0
yum -y install mysql-community-server

# Start MySQL
systemctl start mysqld
systemctl enable mysqld

# Reset password
grep 'password' /var/log/mysqld.log
mysql -uroot -p

# Import database
mysql -uroot -p < /opt/jumpserver.sql

# Verify import success
mysql -uroot -p -e 'use jumpserver; select * from users_user;'
```
    ### Migrate to Docker Container

```sh
# Start database container
docker run -d --name jms_db -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password mysql:5.7

# Import database
docker cp /opt/jumpserver.sql jms_db:/opt/
docker exec -it jms_db bash
mysql -uroot -p < /opt/jumpserver.sql
exit
```
    - Start jms_core and check jumpserver.log for errors.

:::note[Startup Error: Cannot add foreign key constraint]

```sh
# Check database encoding
mysql -uroot -p
select @@collation_database, @@character_set_database;

# Modify database encoding
ALTER DATABASE jumpserver CHARACTER SET utf8 COLLATE utf8_general_ci;
```
:::
