docker run -it --rm \
  --name operational_api \
  -p 3000:3000 \
  -v /home/jos/development/Insight/CLDT.io/server_services/operational_api:/home/jos/operational_api \
  node:5.1.0 /bin/bash
