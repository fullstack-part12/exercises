FROM node:20 AS build-stage 
WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN VITE_BACKEND_URL=http://127.0.0.1:3000/ npm run build

RUN npm install -g serve

CMD ["serve", "dist"]

EXPOSE 3000