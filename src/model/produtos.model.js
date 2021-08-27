const mongoose = require('mongoose')
const DataSchema = new mongoose.Schema({
  name_product: String,
  description_product: String,
  price_product: Number,
  qtn_product: {type: Number, default: 0}
}, {
  timestamps: true
})

const produtos = mongoose.model('Produtos', DataSchema)
module.exports = produtos