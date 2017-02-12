FROM node:7

RUN npm i -g yarn

RUN mkdir -p /usr/src/task-manager
WORKDIR /usr/src/task-manager

COPY package.json /usr/src/task-manager
RUN npm install

COPY . /usr/src/task-manager
RUN npm run deploy

EXPOSE 9021
CMD ["yarn", "start:production"]