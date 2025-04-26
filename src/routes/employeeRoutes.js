const express = require('express');
const router = express.Router();
const {
  addEmployee,
  searchEmployee,
  updateEmployee,
  getEmployees,
} = require('../controllers/employeeController');
const { employeeSchema } = require('../validators/employeeValidator');
const validateBody = require('../middlewares/validadeBody');

/**
 * @swagger
 * tags:
 *   name: Funcionários
 *   description: Gerenciamento de funcionários
 */

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Retorna a lista de funcionários
 *     tags: [Funcionários]
 *     responses:
 *       200:
 *         description: Lista de funcionários obtida com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nome:
 *                     type: string
 *                   cargo:
 *                     type: string
 */

// Rota para listar todos os funcionários
router.get('/', getEmployees);

/**
 * @swagger
 * /employees:
 *   post:
 *     summary: Adiciona um novo funcionário
 *     tags: [Funcionários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - cargo
 *             properties:
 *               nome:
 *                 type: string
 *               cargo:
 *                 type: string
 *     responses:
 *       201:
 *         description: Funcionário criado com sucesso.
 *       400:
 *         description: Erro de validação.
 */

// Rota para adicionar um novo funcionário
router.post('/', validateBody(employeeSchema), addEmployee);

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     summary: Busca um funcionário pelo ID
 *     tags: [Funcionários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do funcionário
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Funcionário encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 cargo:
 *                   type: string
 *       404:
 *         description: Funcionário não encontrado.
 */

// Rota para buscar um funcionário por ID
router.get('/:id', searchEmployee);

/**
 * @swagger
 * /employees/{id}:
 *   put:
 *     summary: Atualiza um funcionário existente
 *     tags: [Funcionários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do funcionário
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               cargo:
 *                 type: string
 *     responses:
 *       200:
 *         description: Funcionário atualizado com sucesso.
 *       400:
 *         description: Erro de validação.
 *       404:
 *         description: Funcionário não encontrado.
 */

// Rota para atualizar um funcionário
router.put('/:id', updateEmployee);

module.exports = router;
