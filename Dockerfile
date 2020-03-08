FROM node:10
WORKDIR /usr/src/app/client

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 80

RUN npm run create