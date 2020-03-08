FROM node:12-alpine

WORKDIR /usr/app/client

COPY /client/package*.json ./

RUN npm install

RUN npm run create

COPY ./client/build . 


FROM node:12-alpine

WORKDIR /usr/app/server

COPY /server/package*.json ./

RUN npm install

COPY ./server .

EXPOSE 80
