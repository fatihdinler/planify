const notFound = (req, res, next) => {
  const error = new Error(`>>> (m) Not Found : ${req.originalUrl}`)
  res.status(404)
  next(error)
}

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  if (err?.message.includes('MongoServerError: E11000 duplicate key error collection')) {
    res.status(statusCode)
    res.json({
      success: false,
      message: err?.message,
      shortDescription: `Duplicate Error`,
      stack: err?.stack
    })
  }
  res.status(statusCode)
  res.json({
    success: false,
    message: err?.message,
    stack: err?.stack
  })
}

module.exports = { notFound, errorHandler }