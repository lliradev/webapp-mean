const Sale = require('../models/sale');
const saleCtrl = {};

saleCtrl.getSales = async (req, res) => {
  const sales = await Sale.find();
  res.json(sales);
};

saleCtrl.createSale = async (req, res) => {
  const sale = new Sale({
    dateSell: req.body.dateSell,
    table: req.body.table,
    dish_drink: req.body.dish_drink,
    quantity: req.body.quantity,
    toPay: req.body.toPay,
    payType: req.body.payType
  });
  await sale.save();
  res.json({
    'status': 'Realizado'
  });
};

saleCtrl.getSale = async (req, res) => {
  const sale = await Sale.findById(req.params.id);
  res.json(sale);
};

saleCtrl.editSale = async (req, res) => {
  const { id } = req.params;
  const sale = {
    dateSell: req.body.dateSell,
    table: req.body.table,
    dish_drink: req.body.dish_drink,
    quantity: req.body.quantity,
    toPay: req.body.toPay,
    payType: req.body.payType
  }
  await Sale.findByIdAndUpdate(id, { $set: sale }, { new: true });
  res.json({
    status: 'Venta Actualizada'
  });
}

saleCtrl.deleteSale = async (req, res) => {
  await Sale.findByIdAndRemove(req.params.id);
  res.json({ status: 'Venta Eliminada' });
}

module.exports = saleCtrl;