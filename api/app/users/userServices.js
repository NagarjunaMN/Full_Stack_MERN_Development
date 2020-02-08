const userModel = require('./userModel')

module.exports.signup = function (bodyData) {

    return new Promise((resolve,reject) => {

            let user = new userModel(bodyData)
            user.save()
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
  
}

module.exports.signin = function (body) {
    return new Promise((resolve,reject) => {
        userModel.findOne({email:body.email})
            .then(data => {
                if(data){
                    let compre = data.compare(body.password,data.password)
                    console.log("im coming here",data)
                    console.log("im coming here",compre)
                    if(compre){
                        resolve(data)
                    }else{
                        // reject(new Error("Email or Password is incorrect"))
                        reject("Email or Password is incorrect")
                    }
                }else{
                    // reject(new Error("User not Found"))
                    reject("User not found")
                }
            })
            .catch(err => reject(err))
    })
}