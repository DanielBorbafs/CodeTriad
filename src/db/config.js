require('dotenv').config();

module.exports = {
  database: 'EMPLOYEES',
  username: 'sa',
  password: '@Senha123!',
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  },
  logging: false,
};
