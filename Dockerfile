# FROM mysql:5.7
# ADD ./db/data.sql /docker-entrypoint-initdb.d


FROM node:current-slim

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install -g nodemon

RUN npm install

EXPOSE 3000

COPY . .