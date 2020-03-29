// const path = require('path');
// const ext = path.extname('index.js');
// console.log(ext);

const http = require('http');
const fs = require('fs');
const path = require('path');
const API = require('./api.js');

const ip = '127.0.0.1'
const port = 3000;

http.createServer((req, res) => {
  console.log('request ', req.url);
  
  let file = '.' + req.url;
  if (file === './') file = './index.html';

  const extension = String(path.extname(file)).toLowerCase();
  const mime = { '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'text/png',
    '.gif': 'text/gif',
    '.jpg': 'text/jpg'
   };
  const type = mime[extension] || 'application/octet-stream';

  fs.readFile(file, (error, content) => {
    if (error) {
      if(error.code === 'ENOENT') {
        if (API.catchAPIrequest(req.url)) {
          res.end(API.exec(req.url), 'utf-8');
        } else {
          fs.readFile('./404.html', (error, content) => {
            res.writeHead(200, {'Content-Type': type});
            res.end(content, 'utf-8');
          })
        }
      } else {
        res.writeHead(500);
        res.end('Error: ' + error.code + '\n');
        res.end();
      }
    } else {
      res.writeHead(200, { 'Content-Type': type });
      res.end(content, 'utf-8');
    }
  });
}).listen(port, ip);

console.log('Running at http://' + ip + ':' + port + '/');