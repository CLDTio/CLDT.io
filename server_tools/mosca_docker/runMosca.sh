if [ ! -d "/var/db/mosca" ]; then
  # Control will enter here if $DIRECTORY doesn't exist.
  sudo mkdir -p /var/db/mosca
  sudo chown jos:staff /var/db/mosca
fi

docker run -p 1883:1883 -p 80:80 -v /var/db/mosca:/db matteocollina/mosca
