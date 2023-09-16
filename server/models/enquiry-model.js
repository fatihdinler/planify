const mongoose = require('mongoose')

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    erquired: true,
  },
  comment: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'Submitted',
    enum: ['Submitted', 'Contacted', 'In Progress']
  }
})

module.exports = mongoose.model('Enquiry', enquirySchema)