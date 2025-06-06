const express = require('express');
const router = express.Router();

const {
  obtenerProductos,
  agregarProducto
} = require('../controllers/productoController');

router.get('/', obtenerProductos);
router.post('/', agregarProducto);

module.exports = router;