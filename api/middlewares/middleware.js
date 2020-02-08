module.exports.logger = function (req,res,next) {
    console.log(req.url , req.method)
    next()
}

module.exports.notFound = function (req,res,next) {
    res.status(404).json({"msg":"Not Found"});
    
}

module.exports.errHandler = function (err,req,res,next ) {
    res.status(500).json({"msg":err.message})
}