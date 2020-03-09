FROM node:12-alpine as build

WORKDIR /usr/app/client

COPY  ./client/package*.json ./

RUN npm install

COPY ./client ./

RUN npm run create
