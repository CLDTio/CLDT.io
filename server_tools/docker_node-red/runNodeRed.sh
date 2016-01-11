docker run -it --rm \
  --name nodered \
  -p 1880:1880 \
  -v /home/jos/.node-red/:/home/jos/.node-red/ \
  -v /home/jos/development/nodejs/node-red-contrib:/home/jos/node-red-contrib \
  josmas/node-red /bin/bash
