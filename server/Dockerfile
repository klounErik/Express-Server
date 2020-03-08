FROM node:10 as server

WORKDIR /app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source

EXPOSE 80

CMD [ "node", "index.js" ]
