docker run -it --rm \
  --name nodered \
  -p 1880:1880 \
  -v /home/jos/.node-red/:/home/jos/.node-red/ \
  josmas/node-red
