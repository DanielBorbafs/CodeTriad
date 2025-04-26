const { Employee } = require('../models/employee');
const { Op } = require('sequelize');
const logger = require('../utils/logger');

async function addEmployee(req, res) {
  try {
    console.log('📥 Corpo recebido:', req.body);
    logger.info('Tentando adicionar um novo funcionário ');
    const newEmployee = await Employee.create(req.body); // Pega o resultado da criação
    logger.info('✅ Funcionário criado:', newEmployee.toJSON()); // Mostra no console o que foi salvo
    res.status(201).json(newEmployee); // Retorna os dados do novo funcionário
  } catch (err) {
    logger.error('❌ Erro ao criar funcionário:', err);
    res.status(500).send('Erro ao criar funcionário');
  }
}

async function searchEmployee(req, res) {
  const { id } = req.params;

  try {
    const employee = await Employee.findByPk(id);

    if (!employee) {
      logger.warn(`Funcionário com ID ${id} não encontrado`);
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    }

    logger.info(`Funcionário com ID ${id} encontrado com sucesso`, {
      id: employee.id,
      nome: `${employee.first_name} ${employee.last_name}`,
      cargo: employee.job,
    });

    res.status(200).json(employee);
  } catch (error) {
    logger.error(`Erro ao buscar funcionário com ID ${id}`, {
      error: error.message,
      stack: error.stack,
    });
    res.status(500).json({ error: 'Erro interno ao buscar funcionário' });
  }
}

async function updateEmployee(req, res) {
  const { id } = req.params;
  const { first_name, last_name, email, gender, job, salario } = req.body;

  logger.info(`Tentando atualizar funcionário com ID: ${id}`);

  try {
    const employee = await Employee.findByPk(id);

    if (!employee) {
      logger.warn(`Funcionário com ID ${id} não encontrado`);
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    }

    employee.first_name = first_name || employee.first_name;
    employee.last_name = last_name || employee.last_name;
    employee.email = email || employee.email;
    employee.gender = gender || employee.gender;
    employee.job = job || employee.job;
    employee.salary = salario || employee.salary;

    await employee.save();

    logger.info(`Funcionário com ID ${id} atualizado com sucesso`);
    res.json(employee);
  } catch (error) {
    logger.error(
      `Erro ao atualizar funcionário com ID ${id}: ${error.message}`
    );
    res.status(500).json({ error: 'Erro ao atualizar funcionário' });
  }
}

async function getEmployees(req, res) {
  try {
    const {
      gender,
      job,
      first_name,
      last_name,
      email,
      minSalary,
      maxSalary,
      orderBy,
      order,
    } = req.query;

    const where = {};

    if (gender) where.gender = gender;
    if (first_name) where.first_name = { [Op.like]: `%${first_name}%` };
    if (last_name) where.last_name = { [Op.like]: `%${last_name}%` };
    if (email) where.email = { [Op.like]: `%${email}%` };
    if (job) where.job = { [Op.like]: `%${job}%` };
    if (minSalary) where.salary = { [Op.gte]: parseFloat(minSalary) };
    if (maxSalary) {
      where.salary = {
        ...where.salary,
        [Op.lte]: parseFloat(maxSalary),
      };
    }

    const orderClause = [];
    if (orderBy) {
      const direction = order?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
      orderClause.push([orderBy, direction]);
    }

    const employees = await Employee.findAll({
      where,
      order: orderClause,
    });

    res.json(employees);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Erro ao buscar funcionários com filtros', error });
  }
}

module.exports = {
  getEmployees,
  addEmployee,
  searchEmployee,
  updateEmployee,
};
