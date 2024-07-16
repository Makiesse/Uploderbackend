const routes = require('express').Router();
const multer = require('multer')
const uploads = require('./config/multer')
const post = require('./controllers/post')

routes.get('/',(req,res)=>{ return res.json({message:'Welcome to UploaderAPI'})});
routes.get('/*',(req,res)=>{
    return res.json(
    {
        Dev:{

            Nome:'Makiesse Afonso',
            Apelido:'Daniel Arkanjo',
            Tel:'922867919/956051882',
            Email:'pdiwola@gmail.com'
        },
        App:{
            Nome:'APIUploader',
            Descrição:'API para teste de Uploads '
        }

    }
)});

routes.post('/post-image',multer(uploads._media).array('file'),post.upload);




module.exports = routes