const fs = require('fs');
const csv = require('csv-parser');
const sql = require('mssql');
const path = require('path');

const csvPath = path.join(__dirname, 'data', 'users_clean.csv');
// Configurações da conexão (ajuste de acordo com seu container)
const config = {
  user: 'sa',
  password: '@Senha123!',
  server: 'localhost',
  database: 'EMPLOYEES',
  options: {
    encrypt: false, // no Docker geralmente não tem SSL
    trustServerCertificate: true,
  },
};

async function insertData() {
  try {
    // Conectar ao banco
    let pool = await sql.connect(config);
    console.log('Conectado ao SQL Server');

    // Ler o CSV
    let results = [];

    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (row) => {
        results.push(row);
      })
      .on('end', async () => {
        console.log(`Importando ${results.length} linhas...`);

        for (let row of results) {
          const query = `
            INSERT INTO Employees (ID, FIRST_NAME, LAST_NAME, EMAIL, GENDER, JOB, SALARY)
            VALUES (@id, @first_name, @last_name, @email, @gender, @job, @salary)
          `;

          await pool
            .request()
            .input('id', sql.Int, row.id)
            .input('first_name', sql.VarChar, row.first_name)
            .input('last_name', sql.VarChar, row.last_name)
            .input('email', sql.VarChar, row.email)
            .input('gender', sql.VarChar, row.gender)
            .input('job', sql.VarChar, row.job)
            .input('salary', sql.Decimal(10, 2), parseFloat(row.salary))
            .query(query);
        }

        console.log('Importação concluída com sucesso!');
        sql.close();
      });
  } catch (err) {
    console.error('Erro na conexão ou inserção:', err);
    sql.close();
  }
}

insertData();
