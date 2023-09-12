const Blog = require('../models/blog-model')
const User = require('../models/user-model')
const asyncHandler = require('express-async-handler')
const validateMongoDBId = require('../utils/validate-mongodb-id')
const cloudinaryUploadImage = require('../utils/cloudinary')
const fs = require('fs')

const createBlog = asyncHandler(async (req, res) => {
  try {
    const blog = await Blog.create(req.body)
    if (blog) {
      res
        .status(200)
        .json({ success: true, message: 'Blog is created successfully!', blog })
    }
  } catch (error) {
    throw new Error('!>> createBlog controller >>>', error)
  }
})

const updateBlog = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    validateMongoDBId(id)

    const blog = await Blog.findOneAndUpdate({ _id: id }, req.body, {
      new: true
    })

    if (blog) {
      res.status(200).json({ success: true, message: 'Blog is updated successfully', blog })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const deleteBlog = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    validateMongoDBId(id)

    const deletedBlog = await Blog.findOneAndDelete({ _id: id })
    if (deletedBlog) {
      res.status(200).json({ success: true, message: 'Blog is deleted successfully' })
    }
    else {
      res.status(404).json({ success: false, message: 'Something went wrong while deleting the blog' })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const getBlog = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    validateMongoDBId(id)

    const blog = await Blog.findById(id).populate('likes').populate('dislikes')
    await Blog.findByIdAndUpdate(id, { $inc: { numViews: 1 } }, { new: true })

    if (blog) {
      res.status(200).json({ success: true, blog })
    } else {
      res.status(409).json({ success: false, message: 'There is no blog' })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const getBlogs = asyncHandler(async (req, res) => {
  try {
    const blogs = await Blog.find()

    if (blogs.length >= 0) {
      res.status(200).json({ success: true, blogs })
    }
  } catch (error) {
    throw new Error(error)
  }
})

// Programatically, when the user is likes a blog, then in the blog model,
// the user's id should be holded in likes array & isLiked should be true.
// If we send a request to the same route, then, the the user's id should
// be removed from the likes array & isLiked should be false. The same
// logic will be handled in dislikeBlog.

const likeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body
  validateMongoDBId(blogId)

  const blog = await Blog.findById(blogId) // Find the blog that you want to be liked.
  const loggedInUserId = req?.user?._id // Find the logged in user that impression occurs.
  const isLiked = blog?.isLiked // Find if the user has liked the blog.
  const isBlogDislikedPreviously = blog?.dislikes?.find((userId => userId?.toString() === loggedInUserId?.toString())) // Find the user has disliked the blog previously.

  if (isBlogDislikedPreviously) {
    const blog = await Blog.findByIdAndUpdate(blogId, {
      $pull: { dislikes: loggedInUserId },
      isDisliked: false
    }, {
      new: true
    })
    res.status(200).json(blog)
  }

  if (isLiked) {
    const blog = await Blog.findByIdAndUpdate(blogId, {
      $pull: { likes: loggedInUserId },
      isLiked: false
    }, {
      new: true
    })
    res.status(200).json(blog)
  } else {
    const blog = await Blog.findByIdAndUpdate(blogId, {
      $push: { likes: loggedInUserId },
      isLiked: true
    }, {
      new: true
    })
    res.status(200).json(blog)
  }
})

const dislikeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body
  validateMongoDBId(blogId)

  const blog = await Blog.findById(blogId) // Find the blog that you want to be liked.
  const loggedInUserId = req?.user?._id // Find the logged in user that impression occurs.
  const isDisliked = blog?.isDisliked // Find if the user has liked the blog.
  const isBlogLikedPreviously = blog?.likes?.find((userId => userId?.toString() === loggedInUserId?.toString())) // Find the user has disliked the blog previously.

  if (isBlogLikedPreviously) {
    const blog = await Blog.findByIdAndUpdate(blogId, {
      $pull: { likes: loggedInUserId },
      isLiked: false
    }, {
      new: true
    })
    res.status(200).json(blog)
  }

  if (isDisliked) {
    const blog = await Blog.findByIdAndUpdate(blogId, {
      $pull: { dislikes: loggedInUserId },
      isDisliked: false
    }, {
      new: true
    })
    res.status(200).json(blog)
  } else {
    const blog = await Blog.findByIdAndUpdate(blogId, {
      $push: { dislikes: loggedInUserId },
      isDisliked: true
    }, {
      new: true
    })
    res.status(200).json(blog)
  }
})

const uploadImages = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateMongoDBId(id)

  try {
    const uploader = path => cloudinaryUploadImage(path, 'images')
    const urls = []
    const files = req.files

    for (const file of files) {
      const { path } = file
      const newPath = await uploader(path)
      urls.push(newPath)
      fs.unlinkSync(path)
    }

    const findBlog = await Blog.findByIdAndUpdate(id, {
      images: urls.map(file => {
        return file
      })
    }, { new: true })

    res.status(200).json({ success: true, findBlog })

  } catch (error) {
    throw new Error(error)
  }
})

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  likeBlog,
  dislikeBlog,
  updateBlog,
  uploadImages
}