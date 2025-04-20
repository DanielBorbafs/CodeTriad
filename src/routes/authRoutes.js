// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');
const authenticateToken = require('../middlewares/authMiddlewares');

router.post('/login', login);
router.post('/register', register);
router.get('/private', authenticateToken, (req, res) => {
  res.json({
    message: `Acesso autorizado! Bem-vindo(a) ${req.user.username}`,
    user: req.user,
  });
});

module.exports = router;
