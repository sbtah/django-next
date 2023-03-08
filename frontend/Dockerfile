FROM node:lts-alpine3.16

WORKDIR /frontend

EXPOSE 3000

RUN apk update \
    && apk upgrade \
    && apk add --no-cache --upgrade bash