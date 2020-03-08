FROM node:12-alpine

WORKDIR /usr/app/client

COPY /client/package*.json ./

RUN npm install

COPY ./client .

RUN npm run create

COPY . ./usr/app/client


FROM node:12-alpine

WORKDIR /usr/app/server

COPY /server/package*.json ./

RUN npm install

COPY ./server .

EXPOSE 80
