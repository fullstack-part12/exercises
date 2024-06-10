FROM node:20 AS build-stage 
WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npx vitest run

RUN VITE_BACKEND_URL=http://127.0.0.1/api/ npm run build

FROM nginx:alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80