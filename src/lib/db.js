
const mongoose = require('mongoose')

const url = ''

const connect = mongoose.connect(
  url, 
  { useNewUrlParser: true, useUnifiedTopology: true }
)

module.exports = {
  connect
}