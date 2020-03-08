FROM node:10 as server

RUN mkdir /app/server

COPY package*.json /app/server

WORKDIR /app/server

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source

COPY . /app/server

EXPOSE 80

CMD [ "node", "index.js" ]
