#!/bin/bash
reload_nginx() {
  echo "reloading"  
  #docker exec nginx /usr/sbin/nginx -s reload  
}

deploy() {  
  service_name=server-prod 
  old_container_id=$(docker ps -f name=$service_name -q | tail -n1)
  
  # bring a new container online, running new code  
  # (nginx continues routing to the old container only)  
  docker-compose up -d --no-deps --scale $service_name=2 --no-recreate $service_name

  # wait for new container to be available    
  new_container_id=$(docker ps -f name=$service_name -q | head -n1)
  new_container_ip=$(docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $new_container_id)
  # echo "new $new_container_id new ip $new_container_ip old $old_container_id"
  curl --silent --include --retry-connrefused --retry 30 --retry-delay 1 --fail http://$new_container_ip:3000/ || exit 1

  # start routing requests to the new container (as well as the old)  
  reload_nginx

  # take the old container offline  
  docker stop $old_container_id
  docker rm $old_container_id

  #docker-compose up --build -d --no-deps --scale $service_name=1 --no-recreate $service_name
  # docker-compose up -d --no-deps --scale $service_name=1 --no-recreate $service_name

  # stop routing requests to the old container  
  reload_nginx  
}