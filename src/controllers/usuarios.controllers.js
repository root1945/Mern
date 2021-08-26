const Usuarios = require('../model/usuarios.model')

module.exports = {
  async index(req, res){
    const user = await Usuarios.find()
    res.json(user)
  },
  async create(req, res){
    const {name_usuario, email_usuario, tipo_usuario, senha_usuario} = req.body
    let data = {}
    let user = await Usuarios.findOne({email_usuario})
    if(!user){
      data = {name_usuario, email_usuario, tipo_usuario, senha_usuario}
      user = await Usuarios.create(data)
      return res.status(200).json(user)
    }else {
      return res.status(500).json(user)
    }
  },
  async details(req, res){
    const {_id} = req.params
    const user = await Usuarios.findOne({_id})
    res.json(user)
  }
}