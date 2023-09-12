const Coupon = require('../models/coupon-model')
const validateMongoDBId = require('../utils/validate-mongodb-id')
const asyncHandler = require('express-async-handler')
const { COUPON } = require('../constans')

const createCoupon = asyncHandler(async (req, res) => {
  try {
    const validation = checkCouponValidation(req, res, 'create')

    if (validation.validated) {
      const coupon = await Coupon.create(req.body)

      if (coupon) {
        res.status(200).json({
          success: true,
          coupon,
          message: COUPON.COUPON_IS_CREATED_SUCCESSFULLY.DESCRIPTION,
          code: COUPON.COUPON_IS_CREATED_SUCCESSFULLY.CODE
        })
      }
    }

  } catch (error) {
    throw new Error(error)
  }
})

const editCoupon = asyncHandler(async (req, res) => {
  try {
    const validation = checkCouponValidation(req, res, 'delete')

    if (validation.validated) {
      const { id } = req.params
      validateMongoDBId(id)

      const coupon = await Coupon.findByIdAndUpdate(id, req.body, { new: true })

      if (coupon) {
        res.status(200).json({
          success: true,
          coupon,
          message: COUPON.COUPON_IS_EDITED_SUCCESSFULLY.DESCRIPTION,
          code: COUPON.COUPON_IS_EDITED_SUCCESSFULLY.CODE
        })
      }
    }
  } catch (error) {
    throw new Error(error)
  }
})

const deleteCoupon = asyncHandler(async (req, res) => {
  try {
    const validation = checkCouponValidation(req, res, 'delete')
    console.log(validation)
    if (validation.validated) {
      const { id } = req.params
      validateMongoDBId(id)

      const coupon = await Coupon.findByIdAndDelete(id)

      if (!coupon) {
        return res.status(404).json({
          success: false,
          message: COUPON.COUPON_IS_DELETED_BEFORE.DESCRIPTION,
          code: COUPON.COUPON_IS_DELETED_BEFORE.CODE
        })
      }
    
      if (coupon) {
        res.status(200).json({
          success: true,
          coupon,
          message: COUPON.COUPON_IS_DELETED_SUCCESSFULLY.DESCRIPTION,
          code: COUPON.COUPON_IS_DELETED_SUCCESSFULLY.CODE
        })
      }
    }
  } catch (error) {
    throw new Error(error)
  }
})

const getCoupons = asyncHandler(async (req, res) => {
  try {
    const coupons = await Coupon.find()
    if (coupons.length > 0) {
      res.status(200).json({
        success: true,
        coupons,
        length: coupons.length
      })
    }
    else if (coupons.length === 0) {
      res.status(200).json({
        success: true,
        message: COUPON.THERE_IS_NO_COUPON_CREATED_IN_DB.DESCRIPTION,
        code: COUPON.THERE_IS_NO_COUPON_CREATED_IN_DB.CODE,
        coupons,
        length: coupons.length
      })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const checkCouponValidation = (req, res, routeType) => {
  if (routeType === 'create') {
    const { name, expiry, discount } = req.body

    if (!name) {
      return res.status(404).json({
        success: false,
        message: COUPON.COUPON_NAME_IS_REQUIRED.DESCRIPTION,
        code: COUPON.COUPON_NAME_IS_REQUIRED.CODE
      })
    }

    if (!expiry) {
      return res.status(404).json({
        success: false,
        message: COUPON.COUPON_EXPIRY_IS_REQUIRED.DESCRIPTION,
        code: COUPON.COUPON_EXPIRY_IS_REQUIRED.CODE
      })
    }

    if (!discount) {
      return res.status(404).json({
        success: false,
        message: COUPON.COUPON_DISCOUNT_IS_REQUIRED.DESCRIPTION,
        code: COUPON.COUPON_DISCOUNT_IS_REQUIRED.CODE
      })
    }

    return { validated: true }
  }

  if (routeType === 'delete') {
    const { id } = req.params

    if (!id) {
      return res.status(404).json({
        success: false,
        message: COUPON.COUPON_ID_IS_MISSING.DESCRIPTION,
        code: COUPON.COUPON_ID_IS_MISSING.CODE
      })
    }

    return { validated: true }
  }
}

module.exports = {
  createCoupon,
  getCoupons,
  editCoupon,
  deleteCoupon,
}