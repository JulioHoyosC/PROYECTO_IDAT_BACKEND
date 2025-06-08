const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ mensaje: 'Token no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token, 'tu_clave_secreta');
    req.usuario = decoded;
    next();
  } catch (error) {
    res.status(401).json({ mensaje: 'Token inválido.' });
  }
};

module.exports = authMiddleware;
