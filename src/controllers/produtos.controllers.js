const Produtos = require('../model/produtos.model')

module.exports = {
  async index(req, res){
    const product = await Produtos.find()
    res.json(product)
  },
  async create(req, res){
    const {name_product, description_product, price_product, qtn_produc} = req.body
    let data = {}
    let product = await Produtos.findOne({name_product})
    if(!product){
      data = {name_product, description_product, price_product, qtn_produc}
      product = await Produtos.create(data)
      return res.status(200).json(product)
    }else {
      return res.status(500).json(product)
    }
  },
  async details(req, res){
    const {_id} = req.params
    const product = await Produtos.findOne({_id})
    res.json(product)
  },
  async delete (req, res){
    const {_id} = req.params
    const product = await Produtos.findByIdAndDelete({_id})
    return res.json(product)
  },
  async update (req, res){
    const { _id, name_product, description_product, price_product, qtn_produc } = req.body
    const data = {name_product, description_product, price_product, qtn_produc}
    const product = await Produtos.findOneAndUpdate({_id}, data, {new: true})
    res.json(product)
  }
}