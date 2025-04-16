-- Criação da base de dados (caso ainda não exista)
CREATE DATABASE EMPLOYEES;
GO

-- Troca para o banco EMPLOYEES
USE EMPLOYEES;
GO

-- Criação da tabela
CREATE TABLE Employees (
    ID INT PRIMARY KEY,
    FIRST_NAME VARCHAR(50),
    LAST_NAME VARCHAR(50),
    EMAIL VARCHAR(50),
    GENDER VARCHAR(20),
    JOB VARCHAR(40),
    SALARY DECIMAL(10,2)
);
GO
