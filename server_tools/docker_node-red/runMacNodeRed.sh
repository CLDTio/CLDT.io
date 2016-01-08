docker run -it --rm \
  -p 1880:1880 \
  -v /Users/jos/.node-red:/home/jos/.node-red \
  -v /Users/jos/development/nodejs/node-red-contrib:/home/jos/node-red-contrib \
  josmas/node-red /bin/bash
