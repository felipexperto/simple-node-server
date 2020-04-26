const getUserInfoById = require('../users/getUserInfoById');

class handleApiRoutes {
  constructor() {}

  /*
    Passo 05: Método exec() que retorna um JSON
    dentro de uma Promise.
  */
  static exec() {
    const p = new Promise((resolve, reject) => {
      try {
        const parts = handleApiRoutes.parts;
        if (parts[0] === 'api')  {
          /*
            se a rota chamada não possuir os termos abaixo,
            a Promise é resolvida com `reject()`

            para adicionar outra rota podemos adicionar um `else if`,
            criar um switch case ou uma função helper em outro arquivo
          */
          if (parts[1] === 'user' && parts[2] === 'get' && parts[3] !== 'undefined') {
            // vamos para o Passo 06 em `api/users/getUserInfoById.js`
            resolve(getUserInfoById.fetchData(parts[3]));
          }
        } else {
          reject('API Error');
        }
      } catch(err) {
        console.log(err);
      }
    });
    /*
      Passo 07: Retorna a Promise.
      Vamos para o Passo 08 em `/server.js`
    */
    return p.then((response) => JSON.stringify(response));
  }

  static catchAPIrequest(v) {
    v[0] == '/' ? v = v.substring(1, v.length) : null;
    if (v.constructor === String) {
      if (v.split('/')[0] === 'api') {
        handleApiRoutes.parts = v.split('/');
        return true;
      }
      return false;
    }
  }
}

handleApiRoutes.parts = null;

module.exports = handleApiRoutes;