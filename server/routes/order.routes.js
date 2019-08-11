const express = require('express');
const router = express.Router();
const order = require('../controllers/order.controller');

router.post('/', order.createOrder);
router.get('/', order.getOrders);

module.exports = router;