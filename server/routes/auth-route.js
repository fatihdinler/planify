const express = require('express')
const router = express.Router()
const { createUser,  loginUser, getUsers, getUser, deleteUser } = require('../controllers/user-controller')

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/get-users', getUsers)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)

module.exports = router