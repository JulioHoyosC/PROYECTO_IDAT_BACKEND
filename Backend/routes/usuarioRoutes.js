const express = require('express');
const { registrarUsuario, obtenerUsuarios } = require('../controllers/usuarioController');
const router = express.Router();

router.post('/registrar', registrarUsuario); 
router.get('/', obtenerUsuarios);           

module.exports = router;