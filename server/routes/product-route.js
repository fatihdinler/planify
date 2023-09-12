const express = require('express')
const { isAdmin, authMiddleware } = require('../middlewares/auth-middleware')
const { uploadPhoto, productImageResize } = require('../middlewares/upload-image')
const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
  uploadImages,
} = require('../controllers/product-controller')
const router = express.Router()

router.post('/create', authMiddleware, isAdmin, createProduct)
router.put('/upload/:id', authMiddleware, isAdmin, uploadPhoto.array('images', 10), productImageResize, uploadImages)
router.get('/get-product/:id', getProduct)
router.put('/wishlist', authMiddleware, addToWishlist)
router.put('/rating', authMiddleware, rating)
router.get('/get-products', getProducts)
router.put('/edit/:id', authMiddleware, isAdmin, updateProduct)
router.delete('/delete/:id', authMiddleware, isAdmin, deleteProduct)

module.exports = router