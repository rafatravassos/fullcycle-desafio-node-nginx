FROM node:15


RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

WORKDIR /usr/src/app
COPY package*.json .
RUN npm install --save

COPY index.js .

# RUN apt-get update
# RUN apt-get -y install nodejs

# COPY package.json /tmp/package.json


#CMD   "npm" "start"
#[ "node", "index.js" ]


