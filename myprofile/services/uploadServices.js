let fs = require('fs')
let multer = require('multer')

module.exports.uploadDemo = function (req,res,filename,dir,cb) {
    
    try {
        fs.mkdirSync(dir)
    } catch (error) {
        console.log(error)
        cb(error,null)
    }
    

    const storage = multer.diskStorage({
        destination: function (req,file,cb) {
            cb(null,dir)
        },
        filename: function (req,file,cb) {
            cb(null,filename)
        }
    })

    let uploads = multer({storage:storage}).single('img')


    uploads(req,res,function (err,success) {
        if(err){
            console.log("something went wrong")
            cb(err,null)
        }else{
            console.log("Successfully uploaded")
            cb(null,"success")
        }
    })
}