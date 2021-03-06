# Colours for Docker tabs. Adapted from https://gist.github.com/pablete/5871811
function tabc() {
  NAME=$1; if [ -z "$NAME" ]; then NAME="Default"; fi
  echo -e "\033]50;SetProfile=$NAME\a"
}

function colordocker() {
  tabc docker
  docker $*
  tabc
}

# Actual call to docker run
colordocker run -it --rm \
  -p 1880:1880 \
  -v /Users/jos/.node-red:/home/jos/.node-red \
  -v /Users/jos/development/nodejs/node-red-contrib:/home/jos/node-red-contrib \
  -v /Users/jos/development/Insight/CLDT.io/ui_services/cldt-ui-nodes:/home/jos/cldt-ui-nodes \
  josmas/node-red /bin/bash
