const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const routes = require('./src/model/routes')

const app = express()
const port = process.env.PORT || 8000

mongoose.connect('mongodb://localhost:27017/mern', {
  useUnifedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
}, (err) => {
  if(err){
    console.log(err)
  }else {
    console.log('MongoDB Conectado com sucesso')
  }
})
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use(routes)

app.listen(5000, () => {
  console.log(`Server runing on port ${5000}`)
})