docker stack deploy -c stack-coati-master-db.yml --with-registry-auth chartroom
docker stack deploy -c stack-message-broker.yml --with-registry-auth chartroom
docker stack deploy -c stack-coati.yml --with-registry-auth chartroom
docker stack deploy -c stack-coati-load-balancer.yml --with-registry-auth chartroom
