const http = require('http');
const fs = require('fs');
const path = require('path');

const { Routes } = require('./api/index');
const { mimetypes } = require('./serverConfig');

/*
  Passo 04: Nós utilizamos o método createServer para criar o servidor.
  Ele recebe uma função anônima com os parâmetros de request e response por padrão.
*/

const server = http.createServer((req, res) => {
  // Do parâmetro de request é possível extrair a url `req.url`
  let file = '.' + req.url;
  // Se path é '/', carregará o arquivo index
  if (file === './') file = './index.html';

  const extension = String(path.extname(file)).toLowerCase();
  const type = mimetypes[extension] || 'application/octet-stream';

  fs.readFile(file, async function(error, content) {
    if (error) {
      /*
        se `error` for por não encontrar arquivo ou diretório: 
        `ENOENT: no such file or directory`
      */
      if(error.code === 'ENOENT') {
        /*
          se a rota conter `api`, prossegue;
          senão, responde com página de 404
        */
        if (Routes.catchAPIrequest(req.url)) {
          /*
            `response` recebe uma Promise
            e só prosseguirá quando ela for resolvida
            graças ao `await` utilizado 
            dentro desta funçao de callback anônima:
            `fs.readFile(file, async function(error, content) {`

            Vamos para o Passo 05 em: api/routes/handleApiRoutes.js
          */
          let response = await Routes.exec();

          /*
            Passo 08: Enviando resposta para o front.
            Vamos para o Passo 09 em: `assets/js/index.js`
          */
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