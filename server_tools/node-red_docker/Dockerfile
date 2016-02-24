FROM node:5.1.0

# Build with:
#  docker build -t <your_name>/node-red .
# run with the runNodeRed.sh file in the repo

MAINTAINER josmas

RUN apt-get update
RUN apt-get install -y sudo less vim

RUN npm install node-red -g

RUN useradd -ms /bin/bash jos
RUN adduser jos sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

USER jos
WORKDIR /home/jos

ENV HOME /home/jos

EXPOSE 1880

CMD /usr/local/bin/node-red
