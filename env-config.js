const ENV = process.env.ENV || 'dev';

const DATABASE_USER = 'nodegreg';
const DATABASE_PWD = '123';
const DATABASE_NAME = 'node_greg';
let DATABASE_HOST = null;

switch (ENV) {
  case 'devdocker':
    DATABASE_HOST = 'mysql';
  break;
  default:
    DATABASE_HOST = 'localhost';
  break;
}

module.exports = {
  DATABASE_USER,
  DATABASE_PWD,
  DATABASE_NAME,
  DATABASE_HOST
}