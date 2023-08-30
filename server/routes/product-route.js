const express = require('express')
const { createProduct, getProduct, getProducts, updateProduct } = require('../controllers/product-controller')
const router = express.Router()


router.post('/create', createProduct)
router.get('/get-product/:id', getProduct)
router.get('/get-products', getProducts)
router.put('/edit/:id', updateProduct)

module.exports = router