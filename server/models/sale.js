const { Schema, model } = require('mongoose');

const SaleSchema = new Schema({
  dateSell: { type: Date, required: true },
  table: { type: Number, required: true },
  dish_drink: { type: String, required: true },
  quantity: { type: Number, required: true },
  toPay: { type: Number, required: true },
  payType: { type: String, required: true }
});


module.exports = model('Sale', SaleSchema);