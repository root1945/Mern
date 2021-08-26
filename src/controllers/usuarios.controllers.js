module.exports = {
  index(req, res){
    res.json({message: "Hello"})
  },
  create(req, res){
    let msg = ''
    res.json({message: msg})
  }
}