FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 10002

CMD [ "npm", "run", "dev" ]
