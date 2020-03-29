const database = require('../connections/handleDbConnections');

class getUserInfoById extends database {
  constructor () {
    super();
  }
  static fetchData(id) {
    this.create();
    let Q = 'SELECT * FROM user WHERE id='+id;
    this.connection.query(Q, (error, results, fields) => {
      if (error) throw error;
      const result = results[0];
      console.log(result);
    });
    this.end();
  }
}

module.exports = getUserInfoById;