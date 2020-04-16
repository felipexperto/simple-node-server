const database = require('../connections/handleDbConnections');

class getUserInfoById extends database {
  constructor () {
    super();
  }
  static fetchData(id) {
    return new Promise((resolve, reject) => {
      this.create();
      const Q = 'SELECT * FROM user WHERE id='+id;
      let result = null;
      this.connection.query(Q, (error, results, fields) => {
        if (error) throw error;
        result = results[0];
        resolve(result);
      });
      this.end();
    });
  }
}

module.exports = getUserInfoById;