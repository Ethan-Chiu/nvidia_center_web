#!/bin/bash

# Activate conda environment
source ~/miniconda3/etc/profile.d/conda.sh
conda activate nvweb_node_env

# Remove all files in the directory except for 'source'


# Build website
yarn install && yarn localize && yarn build

# Copy files from 'source/dist' to the root directory
cp -r ./source/dist/* .

echo "Cleanup and copy completed."
