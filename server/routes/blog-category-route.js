const express = require('express')
const router = express.Router()
const { isAdmin, authMiddleware } = require('../middlewares/auth-middleware')
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getCategories,
} = require('../controllers/blog-category-controller')

router.post('/create', authMiddleware, isAdmin, createCategory)
router.put('/edit/:id', authMiddleware, isAdmin, updateCategory)
router.delete('/delete/:id', authMiddleware, isAdmin, deleteCategory)
router.get('/get-blog-category/:id', getCategory)
router.get('/get-blog-categories', getCategories)

module.exports = router