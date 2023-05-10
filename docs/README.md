```shell
tar -zxvf mongodb.tar.gz -C docker/data
tar -zxvf mysqldb.tar.gz -C docker/data

sudo docker network create -d bridge game
cd docker
sudo docker-compose up -d
sudo docker-compose down
sudo docker-compose ps

http://82.157.54.206:8010

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