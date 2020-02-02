FROM node:10.11.0

RUN apt-get update

RUN mkdir app
RUN cd app
COPY package.json /app/package.json
RUN npm install
