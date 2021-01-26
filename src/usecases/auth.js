
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Users = require('../models/users')

async function signup (email, passsword) {
  const passwordEncripted = await bcrypt.hash(passsword, 10)
  return Users.create({ email, passsword: passwordEncripted })
}

async function login (email, passsword) {
  // 1. verificar que el usuario exista en la base de datos
  // 2. Si existe, verificar que la contraeña proporcionada sea la misma que esta registrada

  const userFound = await Users.findOne({email})

  if (!userFound) throw new Error('Invalid data')

  const isPasswordValid = await bcrypt.compare(passsword, userFound.passsword)

  if (!isPasswordValid) throw new Error('Invalid data')

  const token = jwt.sign({ id: userFound._id }, 'kodemia123')
  
  return token
}

module.exports = {
  signup,
  login
}
