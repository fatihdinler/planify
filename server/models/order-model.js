const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }
    }
  ],
})

module.exports = mongoose.model('Order', orderSchema)