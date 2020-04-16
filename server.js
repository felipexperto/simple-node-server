const http = require('http');
const fs = require('fs');
const path = require('path');

const { Routes } = require('./api/index');
const { mimetypes } = require('./serverConfig');

const server = http.createServer((req, res) => {
  console.log('request url: ', req.url);
  
  let file = '.' + req.url;
  if (file === './') file = './index.html';

  const extension = String(path.extname(file)).toLowerCase();
  const type = mimetypes[extension] || 'application/octet-stream';

  fs.readFile(file, async function(error, content) {
    if (error) {
      if(error.code === 'ENOENT') {
        if (Routes.catchAPIrequest(req.url)) {
          let response = await Routes.exec();
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.write( response );
          res.end();
        } else {
          fs.readFile('./404.html', function(error, content) {
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
});

module.exports = server;