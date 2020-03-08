FROM node:10 as server

RUN mkdir server

COPY package*.json /server

WORKDIR /server

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source

COPY . /server

EXPOSE 80

CMD [ "node", "index.js" ]
