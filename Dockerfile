FROM node:18.15.0 AS builder
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/rodrigocarvalhodev-frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]