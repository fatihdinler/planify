const slugify = require('slugify')

const slugProductController = (req) => {
  if (req.body.title) {
    req.body.slug = slugify(req.body.title)
  }
  return req.body.slug
}

module.exports = {
  slugProductController
}