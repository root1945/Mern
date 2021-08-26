const express = require('express')
const routes = express.Router()
const Usuarios = require('../controllers/usuarios.controllers')

routes.get('/', Usuarios.index)

//User Routes
routes.post('/api/usuarios', Usuarios.create)
routes.get('/api/usuarios', Usuarios.index)
routes.get('/api/usuarios.details/:_id', Usuarios.details)
module.exports = routes
