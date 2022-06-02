FROM node:12.22.12-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV host=localhost
ENV user=root
ENV pass=password
ENV db=data

COPY package*.json /usr/src/app

RUN npm install

COPY . /usr/src/app/

RUN echo ls /usr/src/app

RUN npm run build

EXPOSE 3300

CMD [ "npm", "start" ]