const request = require('request')
const projectModels = require('../models/projectModel')
const config = require('../config/config')

module.exports.getProjects = function () {
    return new Promise((resolve,reject) => {
        request(`${config.apiUrl}/projects`,function (err,response,body) {
            if(err){
                console.log("err in getting project list",err)
                reject(err)
            }else{
                console.log(body)
                let data = JSON.parse(body)
                resolve(data.data)
            }
        })
    })
   
}


module.exports.getProjectDetail = function(alias){
    return new Promise((resolve,reject) => {
        // projectModels.findOne({alias:alias})
        //     .then(data => resolve(data))
        //     .catch(err => reject(err))
        request(`http://localhost:3002/api/projects/${alias}`,function (err,response,body) {
            if(err){
                reject(err)
            }else{
                let data = JSON.parse(body)
                resolve(data.data)
            }
        })
    })
}


module.exports.createNewProject = function (bodyData) {
    return new Promise((resolve,reject) =>{
        // let project = new projectModels(bodyData)
        // project.save()
        //     .then(data => resolve(data))
        //     .catch(err => reject(err))
        let head = {
            method:"POST",
            uri:"http://localhost:3002/api/projects",
            body:bodyData,
            json:true
        }
        request(head,function (err,response,body) {
            if(err){
                reject(err)
            }else{
                resolve(JSON.stringify(body))
            }
        })
    })
}

module.exports.updateProject = function (alias,bodyData) {
    return new Promise((resolve,reject) => {
        // projectModels.findOneAndUpdate({alias:alias},{$set:bodyData , $inc:{'__v':1}})
        //     .then(data => resolve(data))
        //     .catch(err => reject(err))
        let head = {
            method:"PUT",
            uri:`http://localhost:3002/api/projects/${alias}`,
            body:bodyData,
            json:true
        }
        request(head,function (err,response,body) {
            if(err){
                reject(err);
            }else{
                resolve(JSON.stringify(body))
            }
    })
    })
}
module.exports.deleteProject = function (alias) {
    return new Promise((resolve,reject) => {
        // projectModels.findOneAndDelete({alias:alias})
        //     .then(data => resolve(data))
        //     .catch(err => reject(err))
        let head = {
            method:"DELETE",
            uri:`http://localhost:3002/api/projects/${alias}`,
        }
        request(head,function (err,response,body) {
            if(err){
                reject(err)
            }else{
                resolve("Deleted")
            }
    })
})
}