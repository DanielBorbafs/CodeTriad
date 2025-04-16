const express = require('express');
const router = express.Router();
const {
  getEmployees,
  addEmployee,
  searchEmployee,
} = require('../controllers/employeeController');

// Rota para listar todos os funcionários
router.get('/', getEmployees);

// Rota para adicionar um novo funcionário
router.post('/', addEmployee);

// Rota para buscar um funcionário por ID
router.get('/:id', searchEmployee);

module.exports = router;
