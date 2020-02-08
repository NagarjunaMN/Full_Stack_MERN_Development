const projectServices = require('./projectServices')


module.exports.getList  = function (req,res,next) {
    projectServices.ListProj()
        .then(data => {
            res.json({"msg":"we are coming to ProjectRoutes",data:data})
        })
        .catch(err => { next(err) })
        // res.json({"msg":"we are coming to ProjectRoutes"})
}

module.exports.insertProject = function (req,res,next) {
    let bodyData = req.body;
    bodyData.alias = bodyData.name.split(' ').join('-').toLowerCase()
    projectServices.createProject(bodyData)
        .then(data => {
            res.status(201).json({"msg":"Successfully Inserted",data:data})
        })
        .catch(err => next(err))
}

module.exports.getProject = function (req,res,next) {
    let alias = req.params.alias;
    projectServices.oneProject(alias)
        .then(data =>{
            if(data){
                res.json({'mgs':'Project Found',data:data})
            }else{
                res.json({'mgs':`Project not found for ${alias}`})
            }
        })
        .catch(err => next(err))
}


module.exports.updateProject = function (req,res,next) {
    let alias = req.params.alias;
    let bodyData = req.body;
    projectServices.update(alias,bodyData)
        .then(data => {
            res.json({'msg':'Project Updated',data:data})
        })
        .catch(err => next(err))
}



module.exports.deleteProject = function (req,res,next) {
    let alias = req.params.alias
    projectServices.delete(alias)   
        .then(data =>{
            res.json({'msg':'Project Deleted Successfully',data:data})
        })    
        .catch(err => next(err))
}