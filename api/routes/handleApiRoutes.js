const getUserInfoById = require('../users/getUserInfoById');

class handleApiRoutes {
  constructor() {}

  static exec() {
    const parts = handleApiRoutes.parts;

    if (parts[0] === 'api')  {
      if (parts[1] === 'user' && parts[2] === 'get' && parts[3] !== 'undefined') {
        getUserInfoById.fetchData(parts[3]);
      }
    }
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