const express = require('express');
const app = express();
const employeeRoutes = require('./routes/employeeRoutes');
require('./models/employee');

app.use(express.json());
app.use('/employee', employeeRoutes);

app.listen(3000, () => {
  console.log('🚀 Servidor rodando na porta 3000');
});
