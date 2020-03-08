FROM node:10 as server

WORKDIR /usr/src/app

COPY package*.json /usr/src/app

WORKDIR /usr/src/app

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source

COPY . /usr/src/app

EXPOSE 80

CMD [ "node", "index.js" ]
