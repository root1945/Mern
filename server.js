const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.get('/home', (req, res) => {
  res.json({message: "Hello Word"})
})

app.listen(3000, () => {
  console.log(`Server runing on port ${3000}`)
})