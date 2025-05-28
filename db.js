// prova-banco-de-dados/db.js
// APENAS PARA TESTE LOCAL - NÃO USE EM PRODUÇÃO OU COMMIT PARA O GIT
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'trolley.proxy.rlwy.net',          // Host PÚBLICO do Railway
  user: 'root',                           // Usuário do Railway
  password: 'SswolwDlebjbAuznySNEUAeXHoIkETne', // Senha do Railway
  database: 'railway',                    // Banco de dados do Railway
  port: 18220,                            // Porta PÚBLICA do Railway
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then(connection => {
    console.log('Successfully connected to the database via pool (using hardcoded credentials).');
    connection.release();
  })
  .catch(err => {
    console.error('Database connection failed via pool (using hardcoded credentials). Config:', {
      host: 'trolley.proxy.rlwy.net',
      user: 'root',
      database: 'railway',
      port: 18220,
      password_provided: true
    });
    console.error('Original Error:', err);
  });

module.exports = pool;