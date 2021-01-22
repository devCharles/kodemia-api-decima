
const express = require('express')
const koders = require('./../usecases/koders')

const router = express.Router()

router.get('/', async (request, response) => {
  const allKoders = await koders.getAll()

  response.json({
    success: true,
    data: allKoders
  })
})

router.get('/:id', async (request, response) => {

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

router.delete('/:id', (request, response) => {

})

router.patch('/:id', (request, response) => {
  // recibir name y age de body
})

module.exports = router
