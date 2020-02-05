
const projectModels = require('../models/projectModel')

// module.exports.getProjects = function (cb) {
//     projectModels.find().then(data => {
//         cb(null,data)
//     })
//     .catch(err => {
//         cb(err,null)
//     })
// }


//find gives array of document   but find one gives u one document

module.exports.getProjects = function () {
    return new Promise((resolve,reject) => {
        projectModels.find({status:"active"})
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}


module.exports.getProjectDetail = function(alias){
    return new Promise((resolve,reject) => {
        projectModels.findOne({alias:alias})
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}


module.exports.createNewProject = function (bodyData) {
    return new Promise((resolve,reject) =>{
        let project = new projectModels(bodyData)
        project.save()
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

module.exports.updateProject = function (alias,bodyData) {
    return new Promise((resolve,reject) => {
        projectModels.findOneAndUpdate({alias:alias},{$set:bodyData , $inc:{'__v':1}})
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

module.exports.deleteProject = function (alias) {
    return new Promise((resolve,reject) => {
        projectModels.findOneAndDelete({alias:alias})
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}