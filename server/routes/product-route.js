const express = require('express')
const { isAdmin, authMiddleware } = require('../middlewares/auth-middleware')
const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
} = require('../controllers/product-controller')
const router = express.Router()

router.post('/create', authMiddleware, isAdmin, createProduct)
router.get('/get-product/:id', getProduct)
router.put('/wishlist', authMiddleware, addToWishlist)
router.put('/rating', authMiddleware, rating)
router.get('/get-products', getProducts)
router.put('/edit/:id', authMiddleware, isAdmin, updateProduct)
router.delete('/delete/:id', authMiddleware, isAdmin, deleteProduct)

module.exports = router