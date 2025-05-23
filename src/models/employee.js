const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const { password } = require('../db/config');

const Employee = sequelize.define(
  'Employee',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    job: DataTypes.STRING,
    salary: DataTypes.DECIMAL(10, 2),
  },
  {
    tableName: 'Employees_new',
    timestamps: false,
  }
);

module.exports = { Employee };
