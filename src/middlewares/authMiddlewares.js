const jwt = require('jsonwebtoken');

const SECRET_KEY = 'segredin123'; // Usa a mesma do login

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']; // Ex: Bearer token
  const token = authHeader && authHeader.split(' ')[1]; // Pega só o token

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Token não fornecido. Acesso negado.' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido ou expirado.' });
    }

    req.user = user; // Adiciona os dados do usuário no req
    next(); // Deixa continuar
  });
}

module.exports = authenticateToken;
