const Employee = require('../models/employee');

async function getEmployees(req, res) {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar funcionários');
  }
}

async function addEmployee(req, res) {
  try {
    await Employee.create(req.body);
    res.status(201).send('Funcionário criado com sucesso!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao criar funcionário');
  }
}

async function searchEmployee(req, res) {
  const { id } = req.params;

  try {
    const employee = await Employee.findByPk(id);

    if (!employee) {
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    }

    res.status(200).json(employee);
  } catch (error) {
    console.error('Erro ao buscar funcionário:', error);
    res.status(500).json({ error: 'Erro interno ao buscar funcionário' });
  }
}

module.exports = {
  getEmployees,
  addEmployee,
  searchEmployee,
};
