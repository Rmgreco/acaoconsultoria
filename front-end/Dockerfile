FROM node:20.10-alpine3.19

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@10.2.5

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
