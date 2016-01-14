docker run -it \
  --name cldt-ui \
  -p 8080:80 \
  -v /home/jos/development/Insight/CLDT.io/ui_services/cldt-ui:/usr/share/nginx/html \
  -d josmas/cldt-ui
