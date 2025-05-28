// prova-banco-de-dados/db.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD, // Garanta que este é o nome correto
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
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
    console.error('Database connection failed via pool. Attempted Config:', {
      host: process.env.MYSQLHOST,
      user: process.env.MYSQLUSER,
      database: process.env.MYSQLDATABASE,
      port: process.env.MYSQLPORT,
      password_provided_for_env_var: !!process.env.MYSQLPASSWORD
    });
    console.error('Original Error:', err);
  });

module.exports = pool;