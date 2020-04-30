// https://github.com/mysqljs/mysql#introduction
const mysql = require('mysql');

const { 
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PWD,
  DATABASE_NAME } = require('../../env-config');
class database {
  constructor () {}
  static create() {
    
    // Creating MySQL connection...
    this.connection = mysql.createConnection({
      host: DATABASE_HOST,
      user: DATABASE_USER,
      password: DATABASE_PWD,
      database: DATABASE_NAME 
    });
    this.connection.connect();
  }

  static end() {
    // Ending MySQL connection
    this.connection.end();
  }
}

module.exports = database;