const express = require('express');
const hbs = require('hbs')
const app = express();
const middlewares = require('./middlewares/middleware')
const mongoose = require('mongoose')
const session = require('express-session')

const projectRoutes = require('./Routes/projectRoutes')
const adminRoutes = require('./Routes/adminRoutes')
const indexRoutes = require('./Routes/route')
const blogRoutes = require('./Routes/blogRoutes')

mongoose.connect('mongodb://localhost:27017/portfolio' ,{useNewUrlParser:true , useUnifiedTopology:true}).then( connectn => {
    console.log("DB Connected")
}).catch(err => console.log("some issue with mongoose",err))


app.use(express.json());
app.use(express.urlencoded());
app.use(session({
    secret:"myappsupersecret",
    saveUninitializes:false,
    resave:false,
    cookie:{maxage:100000000000}
}))
app.use(middlewares.authenticated)


app.set('views',__dirname+'/views')
app.set('view engine','hbs')
app.use(middlewares.logger);
app.use(express.static(__dirname+'/static'))
hbs.registerPartials(__dirname+'/views/partials')

app.use('/projects',projectRoutes)
app.use('/admin',middlewares.authenticate,adminRoutes)
app.use('/',indexRoutes)
app.use('/blog',blogRoutes)
// app.get('/blog',routes.blog)
// app.get("/blog/:alias",routes.blogDetail)





app.use(middlewares.notFound)
app.use(middlewares.errorHandler)





app.listen(3000,() => {console.log("server is running in 3000")});