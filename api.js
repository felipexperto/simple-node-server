const mysql = require('mysql');

class database {
  constructor () {}
  static create() {
    const message = "Creating MySQL connection...";

    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'nodegreg',
      password: '123',
      database: 'node_greg' 
    });
    this.connection.connect();
    console.log(message + 'Ok.');
  }
  static exec(command) {
    let Q = 'SELECT email_address FROM user WHERE id=02';
    this.connection.query(Q, (error, results, fields) => {
      if (error) throw error;
      const result = results[0];
      console.log('email = ' + result.email_address);
    });
  }
}


class API {
  constructor() {}
  static exec() {
    const parts = API.parts;
    console.log('API.exec(), parts = ', API.parts)
    if(parts[0] === 'api' && parts[1] === 'user' && parts[2] === 'get' && parts[3] !== 'undefined') {
      database.create();
      database.exec();
      // console.log('usuário ' + parts[3]);
    }
  }
  static catchAPIrequest(v) {
    v[0] == '/' ? v = v.substring(1, v.length) : null;
    if (v.constructor === String) {
      if (v.split('/')[0] === 'api') {
        API.parts = v.split('/');
        return true;
      }
      return false;
    }
  }
}

API.parts = null;

module.exports = API;