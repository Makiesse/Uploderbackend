const express = require('express')
const morgan = require('morgan')
const mongoose = require('./config/mongodb')




const app = express();



mongoose._connect
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(require('./routes'))







app.listen(3000);