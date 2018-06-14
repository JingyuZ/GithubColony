# We assume the "context" is the root of the repo

FROM node:8

ENV appDir /usr/src/ipfs-auto-deploy/
RUN mkdir -p /usr/src/ipfs-auto-deploy/

WORKDIR ${appDir}

ADD ./tools/ipfs-auto-deploy/package.json ./
RUN npm install

ADD ./tools/ipfs-auto-deploy/* ${appDir}

EXPOSE 8888

CMD node index.js
