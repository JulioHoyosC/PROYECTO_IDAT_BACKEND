const express = require('express');
const router = express.Router();

const {
  crearProducto,
  obtenerProductos,
  obtenerProducto,
  actualizarProducto,
  eliminarProducto
} = require('../controllers/productoController');

const verificarToken = require('../middleware/authMiddleware');
const validarProducto = require('../validators/productoValidator');

// Aplicar validaciones en crear y actualizar
router.post('/', verificarToken, validarProducto, crearProducto);
router.put('/:id', verificarToken, validarProducto, actualizarProducto);

router.get('/', obtenerProductos);
router.get('/:id', obtenerProducto);
router.delete('/:id', verificarToken, eliminarProducto);

module.exports = router;
