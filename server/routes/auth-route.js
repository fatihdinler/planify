const express = require('express')
const router = express.Router()
const {
  createUser,
  loginUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unBlockUser,
  handleRefreshToken,
  logoutUser,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
} = require('../controllers/user-controller')
const { authMiddleware, isAdmin } = require('../middlewares/auth-middleware')

router.post('/register', createUser)
router.post('/forgot-password-token', forgotPasswordToken)
router.put('/reset-password/:token', resetPassword)
router.put('/update-password', authMiddleware, updatePassword)
router.put('/order/update-order-status/:id', authMiddleware, isAdmin, updateOrderStatus )

router.post('/login', loginUser)
router.get('/logout', logoutUser)
router.post('/login-admin', loginAdmin)
router.post('/cart', authMiddleware, userCart) // To use req.user, need to pass authMiddleware.
router.post('/cart/apply-coupon', authMiddleware, applyCoupon)
router.post('/cart/cash-order', authMiddleware, createOrder)
router.get('/get-user-cart', authMiddleware, getUserCart)
router.delete('/empty-cart', authMiddleware, emptyCart)

router.get('/get-users', getUsers)
router.get('/cart/get-orders', authMiddleware, getOrders)
router.get('/refresh', handleRefreshToken)
router.get('/wishlist', authMiddleware, getWishlist)

router.get('/:id', authMiddleware, isAdmin, getUser)
router.delete('/:id', deleteUser)

router.put('/edit-user', authMiddleware, updateUser)
router.put('/save-address', authMiddleware, saveAddress)
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser)
router.put('/unblock-user/:id', authMiddleware, isAdmin, unBlockUser)

module.exports = router