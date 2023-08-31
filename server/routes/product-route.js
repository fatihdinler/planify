const express = require('express')
const { createProduct, getProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/product-controller')
const { isAdmin, authMiddleware } = require('../middlewares/auth-middleware')
const router = express.Router()

router.post('/create', authMiddleware, isAdmin, createProduct)
router.get('/get-product/:id', getProduct)
router.get('/get-products', getProducts)
router.put('/edit/:id', authMiddleware, isAdmin, updateProduct)
router.delete('/delete/:id', authMiddleware, isAdmin, deleteProduct)

module.exports = router