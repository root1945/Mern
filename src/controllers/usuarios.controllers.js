const Usuarios = require('../model/usuarios.model')

module.exports = {
  index(req, res){
    res.json({message: "Hello"})
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
  }
}