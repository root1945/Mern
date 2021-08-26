const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const DataSchema = new mongoose.Schema({
  name_usuario: String,
  email_usuario: String,
  tipo_usuario: {type: Number, default: 1},
  senha_usuario: String
}, {
  timestamps: true
})