const mysql = require('mysql2/promise');
require('dotenv').config(); // Adicione esta linha no topo se ainda não tiver

const pool = mysql.createPool({
  host: process.env.MYSQLHOST || 'trolley.proxy.rlwy.net', // Fallback para localhost
  user: process.env.MYSQLUSER || 'root',      // Fallback para seu usuário local
  password: process.env.MYSQL_ROOT_PASSWORD || 'SswolwDlebjbAuznySNEUAeXHoIkETne',  // Fallback para sua senha local
  database: process.env.MYSQL_DATABASE || 'railway', // Fallback para seu DB local
  port: process.env.MYSQLPORT || 3306,        // Fallback para porta local
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then(connection => {
    console.log('Successfully connected to the database via pool.');
    connection.release();
  })
  .catch(err => {
    console.error('Database connection failed via pool:', err);
  });

module.exports = pool;