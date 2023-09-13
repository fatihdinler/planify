const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const dbConnect = require('./config/db')
const { errorHandler, notFound } = require('./middlewares/error-handler')
const PORT = process.env.PORT || 4000
const authRouter = require('./routes/auth-route')
const productRouter = require('./routes/product-route')
const blogRouter = require('./routes/blog-route')
const productCategoryRoute = require('./routes/product-category-route')
const blogCategoryRouter = require('./routes/blog-category-route')
const brandRouter = require('./routes/brand-route')
const couponRouter = require('./routes/coupon-route')

dbConnect()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/user', authRouter)
app.use('/api/product', productRouter)
app.use('/api/blog', blogRouter)
app.use('/api/product-category', productCategoryRoute)
app.use('/api/blog-category', blogCategoryRouter)
app.use('/api/brand', brandRouter)
app.use('/api/coupon', couponRouter)

// Use error-handler middlewares after the routes
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
	if (!process.env.PORT) {
		console.warn(`>>> .env file not found or there was an error loading it`)
	}
	console.log(`>>> server is running at http://localhost:${PORT}`)
})