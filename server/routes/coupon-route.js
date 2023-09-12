const express = require('express')
const router = express.Router()
const { isAdmin, authMiddleware } = require('../middlewares/auth-middleware')
const {
  createCoupon,
  getCoupons,
  editCoupon,
  deleteCoupon
} = require('../controllers/coupon-controller')

router.post('/create', authMiddleware, isAdmin, createCoupon)
router.get('/get-coupons', authMiddleware, isAdmin, getCoupons)
router.put('/edit-coupon/:id', authMiddleware, isAdmin, editCoupon)
router.delete('/delete-coupon/:id', authMiddleware, isAdmin, deleteCoupon)

module.exports = router