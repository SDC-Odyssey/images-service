FROM node:12-alpine

WORKDIR /usr/src/app

ENV port=80

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD [ "node", "./server/index.js" ]