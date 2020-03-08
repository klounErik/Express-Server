FROM node:12-alpine

WORKDIR /usr/app

COPY /server/package*.json ./

RUN npm install

COPY ./src .

EXPOSE 80
