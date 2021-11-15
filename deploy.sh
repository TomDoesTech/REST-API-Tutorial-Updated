#!/bin/bash

echo "Pulling"
git pull

echo "Building application"
docker-compose up -d --build
