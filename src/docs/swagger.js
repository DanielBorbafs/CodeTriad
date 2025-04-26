const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API NODEJS',
      version: '1.0.0',
      description: 'Documentação da API feita com Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: [path.resolve(__dirname, '../routes/*.js')], // 🧠 Pega todos arquivos de rota
};
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
