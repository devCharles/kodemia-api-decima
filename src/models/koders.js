
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    trim: true,
    required: true
  },
  age: {
    type: Number,
    min: 15,
    max: 100,
    required: true
  }
})

const model = mongoose.model('koders', schema)

module.exports = model
