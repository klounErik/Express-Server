FROM node:12-alpine as build

WORKDIR /usr/app/client

COPY  ./client/package*.json ./

RUN npm install

COPY . .

RUN npm run create

COPY ./build /usr/app/server
