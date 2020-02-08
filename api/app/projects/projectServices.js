const ProjectModel = require('./projectModel')


module.exports.ListProj = function () {
    // console.log(ProjectModel)
    return new Promise((resolve,reject) => {
        
        ProjectModel.find({"status":"active"})
            .then(data =>{ 
                resolve(data)
                 }) 
            .catch(err =>{ 
                console.log(err)
                reject(err) 
            })
    })
}

module.exports.createProject = function (bodyData) {
    return new Promise((resolve,reject) => {
        let project = new ProjectModel(bodyData)
        project.save().then(data => resolve(data))
        .catch(err => reject(err))
    })
}

module.exports.oneProject = function (alias) {
    return new Promise((resolve,reject) => {
        ProjectModel.findOne({alias:alias})
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

module.exports.update = function (alias,bodyData) {
    return new Promise((resolve,reject) => {
        ProjectModel.findOneAndUpdate({alias:alias},{$set:bodyData,$inc:{'__v':1}},{new:true})
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

module.exports.delete = function (alias) {
    return new Promise((resolve,reject) => {
        ProjectModel.findOneAndDelete({alias:alias})
            .then(data => resolve(data))
            .catch(err => reject(er))
    })
}