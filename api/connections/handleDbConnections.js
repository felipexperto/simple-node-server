// https://github.com/mysqljs/mysql#introduction
const mysql = require('mysql');

class database {
  constructor () {}
  static create() {
    
    // Creating MySQL connection...
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'nodegreg',
      password: '123',
      database: 'node_greg' 
    });
    this.connection.connect();
  }

  static end() {
    // Ending MySQL connection
    this.connection.end();
  }
}

module.exports = database;