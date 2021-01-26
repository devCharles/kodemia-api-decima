
const express = require('express')
const koders = require('./../usecases/koders')
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.get('/', authMiddleware, async (request, response) => {
  const allKoders = await koders.getAll()

  response.json({
    success: true,
    data: allKoders
  })
})

router.get('/:id', authMiddleware, async (request, response) => {

  const koderById = await koders.getById(request.params.id)

  response.json({
    success: true,
    data: koderById
  })
})

router.post('/', async (request, response) => {
  const { name, age } = request.body
  const koderCreated = await koders.create(name, age)
  
  response.json({
    success: true,
    data: koderCreated
  })
})

router.delete('/:id', async (request, response) => {
  const koderDeleted = await koders.deleteById(request.params.id)

  response.json({
    success: true,
    data: koderDeleted
  })
})

router.patch('/:id', async (request, response) => {
  // recibir name y age de body
  const id = request.params.id
  const { name, age } = request.body

  const koderUpdated = await koders.updateById(id, name, age)

  response.json({
    success: true,
    data: koderUpdated
  })

})

module.exports = router
