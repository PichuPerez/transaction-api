const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = express.Router()

//Data base connection
mongoose.set('useCreateIndex', true)
var mongoDB = 'mongodb://127.0.0.1/transactionDB'
mongoose.connect(mongoDB, { useNewUrlParser: true,useUnifiedTopology: true })

//Init app
const app = express()

// Body parser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

//Routes
const routes = require('./routes/index.js')
app.use(routes(router))

app.get('/', function(req, res, next) {
    res.send('This is / from transaction-app')
})

// Server listen
let PORT = 5000
app.listen(PORT, () =>{
    console.log(`Transaction app started in port ${PORT}`)
})

