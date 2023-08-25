const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const dbConnect = require('./config/db')
const { errorHandler, notFound } = require('./middlewares/error-handler')
const PORT = process.env.PORT || 4000
const authRouter = require('./routes/auth-route')

dbConnect()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/user', authRouter)

// Use error-handler middlewares after the routes
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`>>> server is running at http://localhost:${PORT}`)
	if (PORT !== 4000) {
		console.log('>>> .env file is connected successfully !')
	}
})