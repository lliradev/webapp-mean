const { Schema, model } = require('mongoose');

const ExternalSchema = new Schema({
  reason: { type: String, required: true },
  cost: { type: Number, required: true },
});

module.exports = model('External', ExternalSchema);