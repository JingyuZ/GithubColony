// TODO:
// - startup IPFS and deploy the content (maintain a node with the content) (content at ./app/dist/ folder)
// - get the rootURL
// - forward all requests to the IPFS URL

const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.redirect('http://www.google.com'));

app.use('/static', express.static(path.join(__dirname, 'app/dist')));

app.listen(8888, '0.0.0.0', () => console.log('ipfs-auto-deploy listening on port 8888'));
