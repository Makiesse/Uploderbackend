

module.exports={

upload: async (req,res)=>{
    
    return res.json(
    {
        FileInfo:req.files
    }
)}


}