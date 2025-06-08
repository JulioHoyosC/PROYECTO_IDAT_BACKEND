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
const verificarRol = require('../middleware/roleMiddleware');
const validarProducto = require('../validators/productoValidator');

// Solo admin puede crear, actualizar y eliminar productos
router.post('/', verificarToken, verificarRol('admin'), validarProducto, crearProducto);
router.put('/:id', verificarToken, verificarRol('admin'), validarProducto, actualizarProducto);
router.delete('/:id', verificarToken, verificarRol('admin'), eliminarProducto);

// Público
router.get('/', obtenerProductos);
router.get('/:id', obtenerProducto);

module.exports = router;
