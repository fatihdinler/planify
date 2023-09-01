const express = require('express')
const router = express.Router()
const { createUser, loginUser, getUsers, getUser, deleteUser, updateUser, blockUser, unBlockUser, handleRefreshToken, logoutUser, updatePassword } = require('../controllers/user-controller')
const { authMiddleware, isAdmin } = require('../middlewares/auth-middleware')

router.post('/register', createUser)
router.put('/update-password', authMiddleware, updatePassword)
router.post('/login', loginUser)
router.get('/logout', logoutUser)
router.get('/get-users', getUsers)
router.get('/refresh', handleRefreshToken)
router.get('/:id', authMiddleware, isAdmin, getUser)
router.delete('/:id', deleteUser)
router.put('/edit-user', authMiddleware, updateUser)
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser)
router.put('/unblock-user/:id', authMiddleware, isAdmin, unBlockUser)

module.exports = router