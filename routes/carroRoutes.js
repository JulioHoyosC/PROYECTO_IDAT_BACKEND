const express = require('express');
const {addcarro, viewCarro } = require('../controllers/carroController');

const router = express.Router();

router.post('/add', addToCart);         
router.get('/:userId', viewCart);       

module.exports = router;