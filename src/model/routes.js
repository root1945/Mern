const express = require('express')
const routes = express.Router()
const Usuarios = require('../controllers/usuarios.controllers')
const Produtos = require('../controllers/produtos.controllers')

routes.get('/', Usuarios.index)

//User Routes
routes.post('/api/usuarios', Usuarios.create)
routes.get('/api/usuarios', Usuarios.index)
routes.get('/api/usuarios.details/:_id', Usuarios.details)
routes.delete('/api/usuarios/:_id', Usuarios.delete)
routes.put('/api/usuarios', Usuarios.update)

//Product Routes
routes.post('/api/produtos', Produtos.create)
routes.get('/api/produtos', Produtos.index)
routes.get('/api/produtos.details/:_id', Produtos.details)
routes.delete('/api/produtos/:_id', Produtos.delete)
routes.put('/api/produtos', Produtos.update)
module.exports = routes
