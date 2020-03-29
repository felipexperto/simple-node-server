const { ip, port } = require('./serverConfig');
const server = require('./server');

server.listen(port, ip);
console.log('Running at http://' + ip + ':' + port + '/');