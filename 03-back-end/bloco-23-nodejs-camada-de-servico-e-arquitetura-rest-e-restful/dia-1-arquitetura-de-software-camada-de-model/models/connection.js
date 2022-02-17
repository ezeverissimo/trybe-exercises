const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'ezequiel',
  password: 'sehloiro9191',
  database: 'NoSocial'
});

module.exports = connection;