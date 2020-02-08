const userServices = require('./userServices')


module.exports.createUser = function (req,res,next) {
    let body = req.body;
    userServices.signup(body)
        .then(data => {
            res.status(201).json({'msg':'User Created',data:data})
        })
        // .catch(err => next(err))
        .catch(err => res.json({"error":err}))
}

module.exports.Login = function (req,res,next) {
    let body = req.body;
    userServices.signin(body)
        .then(data => {
            res.json({'msg':"Login Successful",data:data})
        })
        // .catch(err => next(err))
        .catch(err => res.json({"error":err}))

    }