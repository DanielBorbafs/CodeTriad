### API de Gerenciamento de Funcionários
## Descrição

Esta é uma API RESTful para gerenciamento de funcionários, construída em Node.js com Express, conectada a um banco de dados SQL Server rodando em um container Docker.
A API permite operações de CRUD em funcionários e possui autenticação baseada em JWT para rotas privadas.
A documentação da API foi desenvolvida com Swagger para facilitar a consulta dos endpoints disponíveis.

## 🛠️ Tecnologias Utilizadas
<li>Node.js<br></li>
<li>Sequelize ORM<br></li>
<li>SQL Server (Docker)<br></li>
<li>JWT para autenticação</li>
<li>Swagger para documentação</li>
<li>Joi para validação de dados</li>
<li>Docker</li>

## 🚀 Como Rodar o Projeto Localmente
Pré-requisitos
<li><strong>Node.js</strong></li>
<li><strong>Docker</strong></li>
<li><strong>Docker Compose</strong></li>

<br>

**Passo 01 :**  
```bash
git clone https://github.com/danielborbafs/apiNodejs.git
```

**Passo 02:**  
```bash
cd apiNodejs
```

**Passo 03:**  
```bash
npm i
```

**Passo 04:**  
```bash
docker-compose up -d
```

**Passo 05:**  
```bash
npm start
```

**Passo 05 acesse:**  
```bash
http://localhost:3000
```

### 📄 Endpoints da API
## 📂 Autenticação
<strong>POST /auth/login</strong>: Login de usuários (recebe username e password, devolve JWT)<br>
<strong> POST /auth/register </strong>: Cadastro de novos usuários <br>
<strong>GET /auth/private</strong>: Rota protegida, necessita de JWT válido<br>

## 👨‍💼 Funcionários
<strong>GET /employees:</strong> Lista todos os funcionários <br>
<strong>POST /employees:</strong> Adiciona um novo funcionário <br>
<strong>GET /employees/{id}:</strong> Busca funcionário pelo ID <br>
<strong>PUT /employees/{id}:</strong> Atualiza dados de um funcionário<br>




