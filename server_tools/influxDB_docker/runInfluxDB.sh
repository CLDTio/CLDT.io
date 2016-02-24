docker run -d \
  -p 8083:8083 \
  -p 8086:8086 \
  -e PRE_CREATE_DB="cldtio_dev" \
  --expose 8090 --expose 8099 \
  --name influxdb \
  tutum/influxdb:0.9
