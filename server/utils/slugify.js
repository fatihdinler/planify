const slugify = require('slugify')

const slugProductController = (req) => {
  if (req.body.title) {
    req.body.slug = slugify(req.body.title, req.body.color, req.body.category, req.body.description)
  }
  return req.body.slug
}

module.exports = {
  slugProductController
}