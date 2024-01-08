#!/bin/bash

source ~/miniconda3/etc/profile.d/conda.sh

conda activate nvweb_node_env

yarn install && yarn localize && yarn build

pm2 reload ecosystem.config.cjs --env production