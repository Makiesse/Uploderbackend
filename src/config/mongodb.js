const mongoose = require('mongoose')



module.exports = {


   _connect: mongoose.connect('mongodb://localhost:27017/appUploaders')
    .then(()=>{ console.log('Base de dados Conectado')})
    .catch((error)=>console.log('Erro ao Conectar a Base de dados',error))

}