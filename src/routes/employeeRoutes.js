const express = require('express');
const router = express.Router();
const {
  getEmployees,
  addEmployee,
  searchEmployee,
  updateEmployee,
} = require('../controllers/employeeController');

// Rota para listar todos os funcionários
router.get('/', getEmployees);

// Rota para adicionar um novo funcionário
router.post('/', addEmployee);

// Rota para buscar um funcionário por ID
router.get('/:id', searchEmployee);

router.put('/:id', updateEmployee);

module.exports = router;
