FROM node:current-slim

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install -g nodemon

RUN npm install

EXPOSE 3000

COPY . .