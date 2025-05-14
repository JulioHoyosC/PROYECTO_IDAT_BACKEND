const express = require('express');
const { registrarUsuario, obtenerUsuarios } = require('../controllers/usuarioController');
const router = express.Router();

router.post('/registro', registrarUsuario);  // Ruta para registrar usuario
router.get('/', obtenerUsuarios);            // Ruta para listar usuarios

module.exports = router;