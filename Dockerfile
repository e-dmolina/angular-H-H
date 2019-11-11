# stage 0, based on Node
FROM node:latest as node

WORKDIR /app

COPY ./ /app/

RUN npm install

RUN npm run build --prod


#stage 1, based on Nginx
FROM nginx:alpine
COPY --from=node /app/dist/angular-H-H /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
