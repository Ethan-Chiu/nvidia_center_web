#!/bin/bash

# Activate conda environment
source ~/miniconda3/etc/profile.d/conda.sh
conda activate nvweb_node_env

# Build website
yarn install && yarn localize && yarn build

# Remove all files in the directory except for 'source'
rm -r /var/www/nvwebpage/*

# Copy files from 'source/dist' to the root directory
cp -r /home/nvweb/nvwebpage_source/source/dist/* /var/www/nvwebpage/

echo "Cleanup and copy completed."
