const Order = require('../models/order');
const orderCtrl = {};

orderCtrl.createOrder = async (req, res) => {
  const newOrder = new Order({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    items: req.body.items.map(item => item._id) || []
  });
  await newOrder.save().then(rec => {
    res.status(200).json(rec);
  }, (err) => {
    res.status(500).json({ error: 'error' })
  });
}

orderCtrl.getOrders = async (req, res) => {
  await Order.find()
    .populate('items')
    .exec()
    .then(rec => {
      res.status(200).json(rec);
    })
    .catch(err => {
      res.status(500).json(err);
    })
}

module.exports = orderCtrl;