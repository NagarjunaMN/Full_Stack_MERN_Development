const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const schema = mongoose.Schema;


const userSchema = new schema({

    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        trim:true,
        unique:true,
        message:{
            unique:"This email already exists"
        }
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        validate:{
            validator:function (v) {
               
                return v.length > 4
            },
            message:`Password length should be greater than 4`
        }
    },
    phone:{
        type:Number,
        required:[true,"Phone number is required"],
        unique:true,
        min:[1000000000,`Phone number should be 10 digits`],
        max:[9999999999,`Phone number should be 10 digits`],
        // message:{  
        //     message:`Phone number should be 10 digits`
        // }
    },
    createdOn:{
        type:Date,
        default:Date.now()
    }

})

userSchema.pre('save',function (next) {
    console.log("this in mongoose model",this)
    this.password = this.encrypt(this.password)
    next()
})

userSchema.methods = {
    encrypt:function (password) {
       return bcrypt.hashSync(password,10)
    },
    compare:function (password) {
        return bcrypt.compareSync(password,this.password)
    }
}

module.exports = mongoose.model('users',userSchema)