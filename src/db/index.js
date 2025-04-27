const { Sequelize } = require('sequelize');

const dbConfig = require('./config');


const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    dialectOptions: dbConfig.dialectOptions,
    logging: dbConfig.logging,
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado ao banco com Sequelize!');
  } catch (error) {
    console.error('❌ Falha ao conectar:', error);
  }
})();

module.exports = { sequelize };
