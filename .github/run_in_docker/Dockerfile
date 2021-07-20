FROM node:lts-alpine
# FROM node:12.18.2

# Lines below are copied from run_tests/Dockerfile
# WORKDIR /action

# COPY package.json .
# COPY package-lock.json .
# COPY index.js .

# RUN npm install

# ENTRYPOINT ["npm", "--prefix=/action", "run", "start"]

##################

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Executes `entrypoint.sh` when the Docker container starts up
ENTRYPOINT ["/entrypoint.sh"]
