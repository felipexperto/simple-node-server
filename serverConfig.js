const ip = '0.0.0.0'
const port = process.env.PORT || 8080;

const mimetypes = { '.html': 'text/html',
'.js': 'text/javascript',
'.css': 'text/css',
'.json': 'application/json',
'.png': 'text/png',
'.gif': 'text/gif',
'.jpg': 'text/jpg'
};

module.exports = {
  ip,
  port,
  mimetypes
}