# specify the node base image for node version 8
FROM node:8

# create app directory
RUN mkdir -p /usr/src/ipfs-auto-deploy
WORKDIR /usr/src/ipfs-auto-deploy

# install app dependencies
COPY package.json /user/src/ipfs-auto-deploy
RUN npm install

# bundle app source
COPY . /usr/src/ipfs-auto-deploy

# expose the application's default port
EXPOSE 8888

# start the app
CMD [ "npm", "start" ]
