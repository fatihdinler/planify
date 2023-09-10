const Brand = require('../models/brand-model')
const asyncHandler = require('express-async-handler')
const validateMongoDBId = require('../utils/validate-mongodb-id')

const createBrand = asyncHandler(async (req, res) => {
  try {
    const brand = await Brand.create(req.body)
    if (brand) {
      res.status(200).json(brand)
    }
  } catch (error) {
    throw new Error(error)
  }
})

const updateBrand = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    validateMongoDBId(id)

    const brand = await Brand.findOneAndUpdate({ _id: id }, req.body, {
      new: true
    })

    if (brand) {
      res.status(200).json({ success: true, message: 'Brand is updated successfully', brand })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const deleteBrand = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    validateMongoDBId(id)

    const deletedBrand = await Brand.findOneAndDelete({ _id: id })

    if (deletedBrand) {
      res.status(200).json({ success: true, message: 'Brand is Deleted Successfully' })
    } else {
      res.status(404).json({ success: false, message: 'Something went wrong while deleting the brand' })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const getBrand = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    validateMongoDBId(id)

    const brand = await Brand.findById(id)

    if (brand) {
      res.status(200).json({ success: true, brand })
    } else {
      res.status(409).json({ success: false, message: 'There is no product brand' })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const getBrands = asyncHandler(async (req, res) => {
  try {
    const brands = await Brand.find({})

    if (brands.length > 0) {
      res.status(200).json({ success: true, brands, numberOfCategories: brands.length })
    }
    else if (brands.length === 0) {
      res.status(200).json({ success: true, message: 'There is no brands', brands, numberOfCategories: brands.length })
    }
    else {
      res.status(404).json({ success: false, message: 'Something went wrong while fetching brands' })
    }
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getBrands,
}