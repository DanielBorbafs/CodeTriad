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

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'Users',
    timestamps: false,
  }
);
module.exports = { Employee, User };
