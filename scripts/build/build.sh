#!/bin/bash

# Cleaning terminal.
echo "Cleaning terminal."
clear

echo "Stoping all containers."
sudo docker stop $(docker ps -a -q)

echo "Removing all containers."
sudo docker rm $(docker ps -a -q)

echo "Building image..."
sudo docker build --no-cache -f ./Dockerfile -t telegram-bot . 

echo "Running image with NoVNC."
sudo docker run -d -p 3333:3333 --name bot -t telegram-bot

echo "Executing scripts inside docker to open scraping in chrome."
sudo docker exec -d -it bot bash /usr/src/app/scripts/job.sh

echo "Executing scripts inside docker to local Node Server."
sudo docker exec -d -it futsal node /usr/src/app/src/server.js