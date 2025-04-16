const sql = require('mssql');

const config = {
  user: 'sa',
  password: '@Senha123!',
  server: 'localhost',
  database: 'EMPLOYEES',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

module.exports = {
  sql,
  config,
};
