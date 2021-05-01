const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/UTS-ARIFRAHMAN-19421021',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() =>{
  console.log('SUCCESSFULLY CONNECT TO DATABASE')
}).catch((e) =>{
  console.log(e)
  console.log('FAILED CONNECT TO DATABASE')
})



app.use(bodyParser.json({
    extended: true,
    limit:'20mb'
}))

app.use(bodyParser.urlencoded({
    extended: true,
    limit:'20mb'
}))


app.use('/service/', require('./routes/service'))

app.listen(3000, () =>{
    console.log('SERVER STARTED')
})