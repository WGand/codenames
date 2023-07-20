FROM node:12 AS builder
RUN npm install -g npm@6.14.5

## Create reusable builder with dependencies
WORKDIR /codenames
ADD ./frontend/package* ./frontend/
ADD ./server/package* ./server/

WORKDIR /codenames/frontend
RUN npm install

WORKDIR /codenames/server
RUN npm install

WORKDIR /codenames
ADD ./ ./
RUN npm run build

## Create runnable configuration based on smaller image
FROM mhart/alpine-node:slim-12
WORKDIR /svc/codenames
COPY --from=builder /codenames/dist ./
VOLUME /svc/codenames/data
ENTRYPOINT node ./server/main.js
EXPOSE 8810
