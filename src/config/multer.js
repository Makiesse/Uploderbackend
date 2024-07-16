const multer = require('multer')
const path = require('path')
const crypto = require('crypto')



const FormatImage =[ 'image/png','image/jpeg']
const FormatDoc =[ 'image/*']
const FormatVideo =[ 'video/mp4','video/avi', "video/mpeg"]
const FormatAudio =[ 'audio/*']
const filtro = (file)=>{
    if(FormatImage.includes(file)){
        return 'img'
    }
    if (FormatVideo.includes(file)) {
        return 'video'
    } 
    
}
const uploads = {

_image:{
    dest:path.resolve(__dirname,'..','public','uploads','img'),
    storage: multer.diskStorage({
        destination:(req,file,cb) =>{
           cb(null, path.resolve(__dirname,'..','public','uploads','img'));
        },
        filename: (req,file,cb)=>{
            crypto.randomBytes(16,(error,hash)=>{
                if(error) cb(error);
                const ext = file.originalname.split('.')
                const fileName = `${hash.toString('hex')}.${ext[1]}`;
                cb(null,fileName)
            })
        },
    }),
    limits: {
        fileSize: 4 * 1024 * 1024
    },
    fileFilter: (req,file,cb)=>{

        if(FormatImage.includes(file.mimetype)){
            cb(null, true)
        }
        else{
            cb(new Error('Formato invalido!'))
        }
    }

},
_doc:{
    dest:path.resolve(__dirname,'..','public','uploads'),
    storage: multer.diskStorage({
        destination:(req,file,cb) =>{
           cb(null, path.resolve(__dirname,'..','public','uploads'));
        },
        filename: (req,file,cb)=>{
            crypto.randomBytes(16,(error,hash)=>{
                if(error) cb(error);

                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null,fileName)
            })
        },
    }),
    limits: {
        fileSize: 4 * 1024 * 1024
    },
    fileFilter: (req,file,cb)=>{

        if(FormatImage.includes(file.mimetype)){
            cb(null, true)
        }
        else{
            cb(new Error('Formato invalido!'))
        }
    }

},
_video:{
    dest:path.resolve(__dirname,'..','public','uploads'),
    storage: multer.diskStorage({
        destination:(req,file,cb) =>{
           cb(null, path.resolve(__dirname,'..','public','uploads'));
        },
        filename: (req,file,cb)=>{
            crypto.randomBytes(16,(error,hash)=>{
                if(error) cb(error);

                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null,fileName)
            })
        },
    }),
    limits: {
        fileSize: 4 * 1024 * 1024
    },
    fileFilter: (req,file,cb)=>{

        if(FormatImage.includes(file.mimetype)){
            cb(null, true)
        }
        else{
            cb(new Error('Formato invalido!'))
        }
    }

},
_audio:{
    dest:path.resolve(__dirname,'..','public','uploads'),
    storage: multer.diskStorage({
        destination:(req,file,cb) =>{
           cb(null, path.resolve(__dirname,'..','public','uploads'));
        },
        filename: (req,file,cb)=>{
            crypto.randomBytes(16,(error,hash)=>{
                if(error) cb(error);

                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null,fileName)
            })
        },
    }),
    limits: {
        fileSize: 4 * 1024 * 1024
    },
    fileFilter: (req,file,cb)=>{

        if(FormatImage.includes(file.mimetype)){
            cb(null, true)
        }
        else{
            cb(new Error('Formato invalido!'))
        }
    }

},
_media:{
    dest:path.resolve(__dirname,'..','public','uploads','img'),
    storage: multer.diskStorage({
        destination:(req,files,cb) =>{
            
           cb(null, path.resolve(__dirname,'..','public','uploads',filtro(files.mimetype)));
        },
        filename: (req,files,cb)=>{
            crypto.randomBytes(16,(error,hash)=>{
                if(error) cb(error);
                const ext = files.originalname.split('.')
                const fileName = `${hash.toString('hex')}.${ext[1]}`;
                cb(null,fileName)
            })
        },
    }),
    limits: {
        fileSize: 20 * 1024 * 1024
    },
    fileFilter: (req,files,cb)=>{

        if(FormatImage.includes(files.mimetype) || FormatVideo.includes(files.mimetype)){
            cb(null, true)
        }
        else{
            cb(new Error('Formato invalido!'))
        }
    }

},

}




module.exports = uploads