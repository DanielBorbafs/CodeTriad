const express = require('express');
const app = express();
const employeeRoutes = require('./routes/employeeRoutes');
require('./models/employee');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/employee', employeeRoutes);
app.use('/auth', authRoutes);

app.listen(3000, () => {
  console.log('🚀 Servidor rodando na porta 3000');
});
