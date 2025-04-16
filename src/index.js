const express = require('express');
const { sql, config } = require('./db/config'); // <== Seu arquivo de config

const app = express();
const port = 3000;

// Middleware para interpretar JSON
app.use(express.json());

sql
  .connect(config)
  .then((pool) => {
    console.log('✅ Conectado ao SQL Server com sucesso!');

    // Exemplo de rota testando conexão
    app.get('/', async (req, res) => {
      try {
        const result = await pool
          .request()
          .query('SELECT TOP 1 * FROM Employees');
        res.json(result.recordset);
      } catch (error) {
        console.error('Erro ao consultar banco:', error);
        res.status(500).send('Erro ao consultar banco');
      }
    });

    app.listen(port, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('❌ Falha ao conectar com o banco de dados:', error);
  });
