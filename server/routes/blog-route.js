const express = require('express')
const router = express.Router()
const { authMiddleware, isAdmin } = require('../middlewares/auth-middleware')
const {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  likeBlog
} = require('../controllers/blog-controller')

router.post('/create', authMiddleware, isAdmin, createBlog)
router.put('/edit/:id', authMiddleware, isAdmin, updateBlog)
router.delete('/delete/:id', authMiddleware, isAdmin, deleteBlog)
router.get('/get-blog/:id', getBlog)
router.get('/get-blogs', getBlogs)
router.put('/likes', authMiddleware, isAdmin, likeBlog)

module.exports = router