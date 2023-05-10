```shell
tar -zxvf mongodb.tar.gz -C docker/data
tar -zxvf mysqldb.tar.gz -C docker/data

sudo docker network create -d bridge game
cd docker
sudo docker-compose up -d
sudo docker-compose down
sudo docker-compose ps
sudo docker-compose logs -f

sudo docker exec -it web0 bash
apt-get update
apt-get install procps
apt-get install vim
ps -ef
UID        PID  PPID  C STIME TTY          TIME CMD
root         1     0  0 11:46 ?        00:00:00 nginx: master process nginx -g daemon off;
nginx       34     1  0 11:46 ?        00:00:00 nginx: worker process
root        35     0  0 11:48 pts/0    00:00:00 bash
root       395    35  0 11:56 pts/0    00:00:00 ps -ef
ls /usr/share/nginx/html/
50x.html  h5  index.html

sudo docker cp web0:/usr/share/nginx/html/ .
sudo chown -R test:test html/

sudo docker exec -it server0 sh
ps -ef
PID   USER     TIME  COMMAND
    1 root      0:00 {run.sh} /bin/sh /run.sh
   66 root      0:33 ./gs -profile=game
   67 root      0:00 ./gt -profile=gate
   68 root      0:00 ./p -profile=proxy
  413 root      0:00 sh
  428 root      0:00 sleep 1
  429 root      0:00 ps -ef

http://82.157.54.206:8010
http://82.157.54.206:8011

ifconfig eth0 | grep 'inet ' | tr -s ' ' | cut -d ' ' -f3

sudo docker pull mysql:8.0.23
sudo docker pull mongo:4.4.4
sudo docker pull quay.io/coreos/etcd:v3.2.32
sudo docker pull wurstmeister/zookeeper
sudo docker pull wurstmeister/kafka:2.12-2.3.0
sudo docker pull redis:latest
sudo docker pull openinggame/web:v1
sudo docker pull openinggame/server:v1

sudo docker tag openinggame/web:v1 yiluxiangbei/openinggame-web:v1
sudo docker tag openinggame/server:v1 yiluxiangbei/openinggame-server:v1
sudo docker push yiluxiangbei/openinggame-web:v1
sudo docker push yiluxiangbei/openinggame-server:v1

docker inspect openinggame/web:v1
```