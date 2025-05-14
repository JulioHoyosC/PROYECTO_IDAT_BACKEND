const express = require('express');
const router = express.Router();

const {
  obtenerCarro,
  agregarProductoAlCarro
} = require('../controllers/carroController');

router.get('/', obtenerCarro);
router.post('/', agregarProductoAlCarro);

module.exports = router;