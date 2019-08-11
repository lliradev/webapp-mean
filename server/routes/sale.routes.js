const express = require('express');
const router = express.Router();
const sale = require('../controllers/sale.controller');

router.get('/', sale.getSales);
router.post('/', sale.createSale);
router.get('/:id', sale.getSale);
router.put('/:id', sale.editSale);
router.delete('/:id', sale.deleteSale);

module.exports = router;