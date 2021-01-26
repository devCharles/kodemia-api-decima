
const express = require('express')
const express = require('cors')
const kodersRouter = require('./routes/koders')
const authRouter = require('./routes/auth')
const server = express()

server.use(cors())
server.use(express.json()) // Middleware
server.use('/koders', kodersRouter)
server.use('/auth', authRouter)

server.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'KodemiaAPIv10'
  })
})

module.exports = server
