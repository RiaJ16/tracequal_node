const creates = require('./creates')
const reads = require('./reads')
const updates = require('./updates')
const deletes = require('./deletes')
const login = require('./login')

var models = require('./models')

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const login = require('./login')

var app=express()
const puerto=3000
mongoose.connect('mongodb://localhost:27017/tracequal', {useNewUrlParser:true, useUnifiedTopology:true})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname+'/views'))

creates(app)
reads(app)
updates(app)
deletes(app)
login(app)

app.listen(puerto,()=>{
    console.log('Servidor corriendo')
})
