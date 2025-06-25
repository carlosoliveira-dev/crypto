ARG NODE_VERSION=22.15.1
FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN apk update && apk upgrade
RUN apk add --no-cache sqlite

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
