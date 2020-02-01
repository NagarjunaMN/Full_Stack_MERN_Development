module.exports.logger = function (req,res,next) {
    console.log(req.url,req.method) 
    next();
}


module.exports.notFound = function (req,res,next) {
    res.status(404).send("Not Found check dude ")
}


module.exports.errorHandler = function (err,req,res,next) {
    res.status(500).send("Something or Nothing went wrong ? check")
}

module.exports.authenticate = function (req,res,next) {     
    if(req.session.isLoggedin){
        next()
    }else{
        res.redirect('/signin')
    }
    
}

module.exports.authenticated = function (req,res,next) {
    if(req.session.isLoggedin){
        res.locals.user = req.session.user;
        next();
    }else{
        next();
    }
}