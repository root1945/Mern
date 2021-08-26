const express = require('express')
const routes = express.Router()
const Usuarios = require('../controllers/usuarios.controllers')

routes.get('/', Usuarios.index)
routes.post('/api/usuarios', Usuarios.create)

module.exports = routes
