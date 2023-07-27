const express = require('express')
const ErrorHandler = require('./utils/error-handler')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

app.use(express.json())
app.use(cookieParser())
app.use('/', express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: true }))


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({
        path: 'server/config/.env'
    })
}

const user = require('./controllers/user-controller')

app.use('/api/v2/user', user)

// Error Handling
app.use(ErrorHandler)

module.exports = app