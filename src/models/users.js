
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  email: {
    type: String,
    pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    minlength: 5,
    maxlength: 50,
    required: true
  },
  passsword: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('users', schema)
