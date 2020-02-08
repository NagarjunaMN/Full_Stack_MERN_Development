const express = require('express')
const mongoose = require('mongoose')
const appMiddleware = require('./middlewares/middleware')
const app = express()

mongoose.connect('mongodb://localhost:27017/portfolio',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(success => console.log("DB connected"))
    .catch(err => console.log("theres somethin wrong",err))


app.use(appMiddleware.logger)

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',function (req,res) {
    res.json({"msg":"App is running"})
})

app.use('/api/projects/',require('./app/projects/projectRoutes'))
app.use('/api/users',require('./app/users/userRoutes'))


app.use(appMiddleware.notFound)
// app.use(appMiddleware.errHandler)

app.listen(3002,function(){console.log("Server Running at 3002")})