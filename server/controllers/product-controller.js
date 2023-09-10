const Product = require('../models/product-model')
const User = require('../models/user-model')
const asyncHandler = require('express-async-handler')
const { slugProductController } = require('../utils/slugify')

const createProduct = asyncHandler(async (req, res) => {
  try {
    slugProductController(req)
    const product = await Product.create(req.body)
    if (product) {
      res.status(200).json({ success: true, message: 'Product is created successfully', product })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const getProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    if (product) {
      res.status(200).json({ success: true, product })
    }
    else {
      res.status(409).json({ success: false, message: 'There is no product' })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const getProducts = asyncHandler(async (req, res) => {

  try {
    const queryObj = { ...req.query }

    const excludeFields = ['page', 'sort', 'limit', 'fields']
    excludeFields.forEach(field => delete queryObj[field])

    let queryStr = JSON.stringify(queryObj)
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)

    let query = Product.find(JSON.parse(queryStr))

    if (req.query.sort) { // Sort
      const sortBy = req.query.sort.split(',').join(' ')
      query = query.sort(sortBy)
    } else {
      query = query.sort('-createdAt')
    }

    if (req.query.fields) { // Limit to display data
      const fields = req.query.fields.split(',').join(' ')
      query = query.select(fields)
    } else {
      query = query.select('-__v')
    }

    const page = req.query.page
    const limit = req.query.limit
    const skip = (page - 1) * limit
    query = query.skip(skip).limit(limit)

    if (req.query.page) {
      const productCount = await Product.countDocuments()
      if (skip >= productCount) {
        throw new Error('This page does not exists !')
      }
    }

    const products = await query

    if (products.length > 0) {
      res.status(200).json({ success: true, products })
    }
    else if (products.length === 0) {
      res.status(200).json({ success: true, message: 'There is no product record in database', products })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    slugProductController(req)

    const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true
    })
    if (product) {
      res.status(200).json({ success: true, message: 'Product is updated successfully', product })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    const deletedProduct = await Product.findOneAndDelete({ _id: id })
    if (deletedProduct) {
      res.status(200).json({ success: true, message: 'Product is deleted successfully' })
    }
    else {
      res.status(404).json({ success: false, message: 'Something went wrong while deleting the product' })
    }
  } catch (error) {
    throw new Error(error)
  }
})

// The mechanism behined the addToWishlist controller is that
// we do not provide an unWishList controller. By doing so,
// user'll make a put request to this controller and when
// they want to unwish the product, they need to make another 
// put request with the same productId.
const addToWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user
  const { productId } = req.body

  try {
    const user = await User.findById(_id)
    const isProductAlreadyWished = user.wishList.find((id) => id.toString() === productId)

    if (isProductAlreadyWished) {
      const user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishList: productId },
        },
        {
          new: true,
        }
      )
      res.json(user)
    } else {
      const user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishList: productId },
        },
        {
          new: true,
        }
      )
      res.json(user)
    }

  } catch (error) {
    throw new Error(error)
  }
})

const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user
  const { star, productId, comment } = req.body

  try {
    const product = await Product.findById(productId)

    const alreadyRated = product?.ratings?.find((rating) => rating.postedBy.toString() === _id.toString())

    if (alreadyRated) {
      const updateRating = await Product.updateOne({
        ratings: {
          $elemMatch: alreadyRated,
        }
      }, {
        $set: { 'ratings.$.star': star, 'ratings.$.comment': comment }
      }, {
        new: true
      })
    } else {
      const rateProduct = await Product.findByIdAndUpdate(productId, {
        $push: {
          ratings: {
            star: star,
            comment: comment,
            postedBy: _id
          }
        }
      }, { new: true })
    }

    const allRatings = await Product.findById(productId)
    const totalNumberOfRatings = allRatings.ratings.length

    const sumOfAllRatings = allRatings.ratings
      .map(rating => rating.star)
      .reduce((prev, curr) => prev + curr, 0)

    const averageRating = (sumOfAllRatings / totalNumberOfRatings).toFixed(1)
    const modifiedProduct = await Product.findByIdAndUpdate(productId, {
      totalRating: averageRating
    }, { new: true })

    res.json({product: modifiedProduct})
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
})

module.exports = {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating
}