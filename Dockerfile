# Stage 1
FROM node:alpine as builder
WORKDIR /lift-off
COPY package*.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Stage 2
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /lift-off/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]