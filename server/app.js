const express = require('express')
const ErrorHandler = require('./utils/error-handler')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload({ useTempFiles: true }))

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({
        path: 'server/config/.env'
    })
}

// Error Handling
app.use(ErrorHandler)

module.exports = app