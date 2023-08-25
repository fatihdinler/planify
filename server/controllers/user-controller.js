const User = require('../models/user-model')
const asyncHandler = require('express-async-handler')
const { generateToken } = require('../config/jwt')
const { generateRefreshToken } = require('../config/refresh-token')
const validateMongoDBId = require('../utils/validate-mongodb-id')

const createUser = asyncHandler(async (req, res) => {
  const { email } = req.body
  const findUser = await User.findOne({ email: email })

  if (!findUser) {
    // Create a new User.
    const newUser = await User.create(req.body)
    res.status(200).json({
      success: true,
      message: 'User created successfully !',
      newUser
    })
  } else {
    throw new Error('User is alredy exists !')
  }
})

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check if user exists
  const findUser = await User.findOne({ email: email })

  if (findUser) {
    const isPasswordMatched = await findUser.isPasswordMatched(password)
    const refreshToken = await generateRefreshToken(findUser?._id)
    const updatedUser = await User.findByIdAndUpdate(findUser?._id, { refreshToken: refreshToken }, { new: true })
    if (isPasswordMatched) {
      // Send the token
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        maxAge: 3 * 24 * 60 * 60 * 1000
      })
      res.status(200).json({
        success: true,

        id: findUser?._id,
        firstname: findUser?.firstname,
        lastname: findUser?.lastname,
        email: findUser?.email,
        mobile: findUser?.mobile,
        token: generateToken(findUser?._id),
        statusCode: 200
      })
    } else {
      // Incorrect password
      res.status(401).json({ success: false, message: 'Incorrect password', statusCode: 401 })
    }
  } else {
    // User doesn't exist
    res.status(404).json({ success: false, message: 'User not found', statusCode: 404, })
  }
})

const handleRefreshToken = asyncHandler(async (req, res) => {
  const { refreshToken } = req.cookies
  if (!refreshToken) {
    throw new Error('There is no refresh token in cookies !')
  }
  

})

const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({})
    if (users.length > 0) {
      res.status(200).json(users)
    }
    else {
      res.status(200).json({ success: true, message: 'There is no user created in the db', status: 200 })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const getUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    validateMongoDBId(id)
    if (id) {
      const user = await User.findById(id)
      if (user) {
        res.status(200).json({ success: true, status: 200, user })
      }
      else {
        res.status(404).json({ success: false, status: 404, message: 'User not found' })
      }
    }
    else {
      res.status(404).json({ success: false, status: 404, message: 'You have to pass user id as request params' })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const deleteUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    validateMongoDBId(id)
    if (id) {
      const user = await User.findByIdAndDelete(id)
      if (user) {
        res.status(200).json({ success: true, status: 200, message: 'User is deleted successfully', user })
      }
      else {
        res.status(404).json({ success: false, status: 404, message: 'User not found' })
      }
    }
    else {
      res.status(404).json({ success: false, status: 404, message: 'You have to pass user id as request params' })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.user
  validateMongoDBId(id)
  try {
    const { firstname, lastname, email, mobile } = req.body
    const user = await User.findByIdAndUpdate(id, {
      firstname: firstname,
      lastname: lastname,
      email: email,
      mobile: mobile,
    }, { new: true })
    if (user) {
      res.status(200).json({ success: true, message: 'User is updated successfully', user })
    }
    else {
      res.status(404).json({ success: false, message: 'User not found' })
    }
  } catch (error) {
    throw new Error(error)
  }
})

const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.user
  validateMongoDBId(id)
  try {
    const user = await User.findByIdAndUpdate(id, { isBlocked: true }, { new: true })
    res.status(200).json({ success: true, message: 'User is blocked successfully', user })
  } catch (error) {
    res.status(404).json({ success: false, message: 'User cannot be blocked' })
    throw new Error(error)
  }
})

const unBlockUser = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateMongoDBId(id)
  try {
    const user = await User.findByIdAndUpdate(id, { isBlocked: false }, { new: true })
    res.status(200).json({ success: true, message: 'User is unblocked successfully', user })
  } catch (error) {
    res.status(404).json({ success: false, message: 'User cannot be unblocked' })
    throw new Error(error)
  }
})


module.exports = { 
  createUser, 
  loginUser, 
  getUsers, 
  getUser, 
  deleteUser, 
  updateUser, 
  blockUser, 
  unBlockUser,
  handleRefreshToken,
}