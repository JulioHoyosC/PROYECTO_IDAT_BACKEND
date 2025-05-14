// routes/productRoutes.js
const express = require('express');
const { createProduct, getProducts } = require('../controllers/productoController');

const router = express.Router();

router.post('/', createProduct);      // Crear producto
router.get('/', getProducts);         // Obtener todos los productos

module.exports = router;