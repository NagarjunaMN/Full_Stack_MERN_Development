const express = require('express');
const hbs = require('hbs')
const app = express();
const middlewares = require('./middlewares/middleware')
const routes = require('./Routes/route')
const session = require('express-session')



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



app.get('/',routes.home)
app.get('/contact',routes.contact)
app.post('/contact',routes.doContact)
app.get('/project',routes.projects)
app.get('/blog',routes.blog)
app.get('/signin',routes.signin)
app.post('/signin',routes.Dosignin)
app.get('/signup',routes.signup)
app.post('/signup',routes.Dosignup)
app.get('/signout',routes.signout)
app.get('/admin', middlewares.authenticate ,routes.admin)
app.get('/admin/projects', middlewares.authenticate ,routes.adminProjects)
app.get("/admin/projects/create-new",middlewares.authenticate,routes.createNewProject)
app.post("/admin/projects/create-new",middlewares.authenticate,routes.docreateNewProject)
app.get("/project/:alias",routes.projDetail)
app.get("/blog/:alias",routes.blogDetail)
app.get('/admin/projects/:alias', middlewares.authenticate ,routes.adminProjectsDetail)




app.use(middlewares.notFound)
// app.use(middlewares.errorHandler)





app.listen(3000,() => {console.log("server is running in 3000")});