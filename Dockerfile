FROM node:12-alpine as build

WORKDIR /usr/app/client

COPY /client/package*.json ./

RUN npm install

COPY ./client .

RUN npm run create


FROM node:12-alpine

WORKDIR /usr/app/server

COPY /server/package*.json ./

RUN npm install

COPY ./server .

COPY --from=build /usr/app/client/build ./usr/app/server

EXPOSE 80
