const express = require('express');
const router = express.Router();
const order = require('../controllers/order.controller');

router.post('/', order.createOrder);
router.get('/', order.getOrders);
router.delete('/:id', order.deleteOrder);

module.exports = router;