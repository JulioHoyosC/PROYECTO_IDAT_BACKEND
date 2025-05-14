const express = require('express');
const { createOrder, getUserOrders } = require('../controllers/ordenController');

const router = express.Router();

router.post('/', createOrder);           
router.get('/:userId', getUserOrders);   

module.exports = router;