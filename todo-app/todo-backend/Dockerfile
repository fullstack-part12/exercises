FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD REDIS_URL=redis://redis/ MONGO_URL=mongodb://the_username:the_password@mongo/the_database npm start dev

EXPOSE 3000
