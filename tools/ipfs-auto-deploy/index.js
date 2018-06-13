// TODO:
// - build content
// - startup IPFS and deploy the content (maintain a node with the content)
// - get the rootURL
// - forward all requests to the IPFS URL

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('ipfs-auto-deploy says "hello"!'));

app.listen(8888, () => console.log('ipfs-auto-deploy listening on port 8888')); 
