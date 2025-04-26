const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger'); // 🧠 ajuste conforme sua organização
const employeeRoutes = require('./routes/employeeRoutes');

require('./models/employee');
const authRoutes = require('./routes/authRoutes');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());

app.use('/employee', employeeRoutes);
app.use('/auth', authRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
  console.log('🚀 Servidor rodando na porta 3000');
});
