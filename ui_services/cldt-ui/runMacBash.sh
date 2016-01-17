docker run -it --rm \
  --name cldt-ui \
  -p 8080:80 \
  -v /Users/jos/development/Insight/CLDT.io/ui_services/cldt-ui:/usr/share/nginx/html \
  josmas/cldt-ui /bin/bash
