const ErrorHandler = require('../utils/error-handler')

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || 'Internal Server Error'

    if (err.name === 'CastError') {
        const message = `Resources Not Found with This id. Invalid ${err.path}`
        err = new ErrorHandler(message, 400)
    }

    if (err.code === 11000) {
        const message = `Duplicate Key ${Object.keys(err.keyValue )} Entered`
        err = new ErrorHandler(message, 400)
    }

    if (err.name === 'JsonWebTokenError') {
        const message = 'Your Token is invalid, please try again later'
        err = new ErrorHandler(message, 400)
    }

    if (err.name === 'TokenExpiredError') {
        const message = 'Your Token is Expired, please try to take another one'
        err = new ErrorHandler(message, 400)
    }

    res.statusCode(err.statusCode).json({
        success: false,
        message: err.message
    })
}