FROM node:lts-alpine

# Lines below are copied from run_tests/Dockerfile
WORKDIR /action

COPY package.json .
COPY package-lock.json .
COPY index.js .

RUN npm install

ENTRYPOINT ["npm", "--prefix=/action", "run", "start"]
