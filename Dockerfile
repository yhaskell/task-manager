FROM node:7

RUN npm i -g yarn typescript concurrently

RUN mkdir -p /usr/src/task-manager
WORKDIR /usr/src/task-manager

COPY package.json /usr/src/task-manager
RUN yarn && yarn clean

COPY . /usr/src/task-manager
RUN npm run deploy

EXPOSE 9021
CMD ["yarn", "start:production"]