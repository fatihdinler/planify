const Product = require('../models/product-model')
const asyncHandler = require('express-async-handler')
const { slugProductController } = require('../utils/slugify')

const createProduct = asyncHandler(async (req, res) => {
  try {
    slugProductController(req)
    const product = await Product.create(req.body)
    if (product) {
      res.status(200).json({ success: true, message: 'Product is created successfully', product })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const getProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    if (product) {
      res.status(200).json({ success: true, product })
    }
    else {
      res.status(409).json({ success: false, message: 'There is no product' })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find()
    if (products.length > 0) {
      res.status(200).json({ success: true, products })
    }
    else if (products.length === 0) {
      res.status(200).json({ success: true, message: 'There is no product record in database', products })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    slugProductController(req)

    const product = await Product.findOneAndUpdate({_id: id}, req.body, {
      new: true
    })
    console.log('product -->', product)
    if (product) {
      res.status(200).json({ success: true, message: 'Product is updated successfully', product })
    }
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = {
  createProduct,
  getProduct,
  getProducts,
  updateProduct
}