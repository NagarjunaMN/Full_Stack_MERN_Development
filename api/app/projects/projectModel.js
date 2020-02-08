const mongoose = require('mongoose')
let Schema = mongoose.Schema

let projectSchema = new Schema(
    {

        name:{
            type:String,
            required:true
        },
        alias:{
            type:String,
            required:true,
            unique:true
        },
        image:{
            type:String
        },
        description:{
            type:String
        },
        githubUrl:{
            type:String,
            trim:true               //removes the forst and last spaces in the url if any
        },
        tags:[{
            name:String,
            class:String,
            
        }],
        imageSliders:[String],
        relatedProjects:[{
            name:String,
            link:String
        }],
        createdOn:{
            type:Date,
            default:Date.now()
        },

        updatedOn:{
            type:Date,
            default:Date.now()
        },
        status:{
            type:String,
            default:"active",
            enum:['active','inactive']
    }
    }
    )

//it returns the instance if the collection
module.exports = mongoose.model('projects',projectSchema) //first parameter is the collection aname in the database and second parameter is the name of the schema