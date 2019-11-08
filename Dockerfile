# stage 0, based on Node
FROM node:latest as node

WORKDIR /app

COPY ./ /app/

RUN npm install
<<<<<<< HEAD
RUN npm run build -- --prod
=======
RUN npm run build --prod
>>>>>>> develop

#stage 1, based on Nginx
FROM nginx:alpine
COPY --from=node /app/dist/angular-H-H /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
