const database = require('../connections/handleDbConnections');

/*
  Passo 06: Abre conexão com banco, 
  realiza consulta, retorna resultados com `resolve`
  e fecha conexão.

  A classe getUserInfoById herda 
  as propriedades e métodos da classe database,
  importada acima.
*/
class getUserInfoById extends database {
  constructor () {
    super();
  }
  static fetchData(id) {
    return new Promise((resolve, reject) => {
      // abre conexão
      this.create();
      const Q = 'SELECT * FROM user WHERE id='+id;
      let result = null;
      // realiza consulta
      this.connection.query(Q, (error, results, fields) => {
        if (error) throw error;
        result = results[0];
        // retorna resultados
        resolve(result);
      });
      // fecha conexão
      // e vamos para o Passo 07 em: api/routes/handleApiRoutes.js
      this.end();
    });
  }
}

module.exports = getUserInfoById;