
const express = require('express')
const kodersRouter = require('./routes/koders')

const server = express()

server.use(express.json()) // Middleware
server.use('/koders', kodersRouter)

server.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'KodemiaAPIv10'
  })
})

module.exports = server
