// routes/ordenRoutes.js
const express = require('express');
const router = express.Router();

const { crearOrden } = require('../controllers/ordenController');

router.post('/', crearOrden);

module.exports = router;