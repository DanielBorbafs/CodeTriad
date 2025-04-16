const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Employee = sequelize.define(
  'Employee',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    job: DataTypes.STRING,
    salary: DataTypes.DECIMAL(10, 2),
  },
  {
    tableName: 'Employees',
    timestamps: false,
  }
);

module.exports = Employee;
