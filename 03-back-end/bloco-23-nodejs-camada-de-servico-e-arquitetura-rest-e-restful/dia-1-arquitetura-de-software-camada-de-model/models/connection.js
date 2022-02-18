const mysql = require('mysql2/promise');
require('dotenv').config();


const connection = mysql.createPool({
  host: process.env.MYSQL_PASSWORD,
  user: 'ezequiel',
  password: process.env.SECRET_KEY,
  database: 'NoSocial'
});

module.exports = connection;