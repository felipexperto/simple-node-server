/*
  Passo 03: Ao rodar o projeto esse arquivo é executado.
  Antes mesmo de acessar o endereço de desenvolvimento (localhost),
  um servidor que contém as rotas do NodeJS é iniciado
  com o comando `server.listen`.

  O que é uma 'rota' nesse contexto?
  É um endereço declarado no servidor que terá uma função callback.
  Essa função - no nosso caso - retornará um objeto JSON.
  Exemplo de rota: http://127.0.0.1:3000/api/user/get/01

  Vamos para o Passo 04 em: `/server.js`
*/

const { ip, port } = require('./serverConfig');
const server = require('./server');

server.listen(port, ip);
console.log('Running at http://' + ip + ':' + port + '/');