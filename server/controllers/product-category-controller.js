const ProductCategory = require('../models/product-category-model')
const asyncHandler = require('express-async-handler')
const validateMongoDBId = require('../utils/validate-mongodb-id')

const createCategory = asyncHandler(async (req, res) => {
  try {
    const category = await ProductCategory.create(req.body)
    if (category) {
      res.status(200).json(category)
    }
  } catch (error) {
    throw new Error(error)
  }
})

const updateCategory = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    validateMongoDBId(id)

    const category = await ProductCategory.findOneAndUpdate({ _id: id }, req.body, {
      new: true
    })

    if (category) {
      res.status(200).json({ success: true, message: 'Category is updated successfully', category })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const deleteCategory = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    validateMongoDBId(id)

    const deletedCategory = await ProductCategory.findOneAndDelete({ _id: id })

    if (deletedCategory) {
      res.status(200).json({ success: true, message: 'Product Category is Deleted Successfully' })
    } else {
      res.status(404).json({ success: false, message: 'Something went wrong while deleting the product category' })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const getCategory = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    validateMongoDBId(id)

    const category = await ProductCategory.findById(id)

    if (category) {
      res.status(200).json({ success: true, category })
    } else {
      res.status(409).json({ success: false, message: 'There is no product category' })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const getCategories = asyncHandler(async (req, res) => {
  try {
    const categories = await ProductCategory.find({})

    if (categories.length > 0) {
      res.status(200).json({ success: true, categories, numberOfCategories: categories.length })
    }
    else if (categories.length === 0) {
      res.status(200).json({ success: true, message: 'There is no product categories', categories, numberOfCategories: categories.length })
    }
    else {
      res.status(404).json({ success: false, message: 'Something went wrong while fetching product categories' })
    }
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getCategories,
}