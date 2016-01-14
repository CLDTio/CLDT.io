docker run -it --rm \
  --name op-api \
  -p 3000:3000 \
  -v /home/jos/development/Insight/CLDT.io/server_services/operational_api:/home/jos/operational_api \
  josmas/op-api
