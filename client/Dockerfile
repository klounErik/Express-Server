FROM node:12-alpine as build

WORKDIR /usr/app/client

COPY  /client/package.json /usr/app/client

RUN npm install

COPY ./client .

