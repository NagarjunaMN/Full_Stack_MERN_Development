const router = require('express').Router()
const mongoClient = require('mongodb').MongoClient;
const projectServices = require('../services/projectService')
let db;


router.get('/', function (req,res) {
    res.render('admin/admin',{
        layout:"admin-layout",
        title:"admin"
    })
})


router.get('/projects', function (req,res,next) {


    projectServices.getProjects()
        .then(data => {
            res.render('admin/projects',{
            layout:"admin-layout",
            projects:data,
            title:"projects"
        
        })
    })
        .catch(err => next(err))

    // let projectCollections = db.collection("projects")
    // projectCollections.find().toArray(function (err,data) {
    //     if(err){
    //         console.log(err)
    //     }
    //     else{
    //         res.render('admin/projects',{
    //         layout:"admin-layout",
    //         projects:data,
    //         title:"projects"
    //         })
    //     }
    
    // })
})

router.get("/projects/create-new", function (req,res) {
    res.render("admin/createNewProject",{
        title:"New Project",
        layout:"admin-layout"
    })
})


router.post("/projects/create-new",function (req,res,next) {
    let bodyData = req.body
    bodyData.alias = bodyData.name.split(' ').join('-').toLowerCase()

    let classes = ['info','danger','warning','primary','success']
    bodyData.tags = bodyData.tags.split(',').map((ele,i) => {
        return {
            name:ele,
            class:classes[i]
        }
    })

    projectServices.createNewProject(bodyData)
        .then(data => {
            res.redirect('/admin/projects')
        })
        .catch(err => next(err))
       
    
    })
    

router.get('/projects/:alias',function (req,res,next) {
    let alias = req.params.alias; 

    projectServices.getProjectDetail(alias)
        .then(data => {
            res.render("admin/projectDetail",{
                layout:"admin-layout",
                title:"project-detail",
                project:data
        })
    })
        .catch(err => next())


    // let projectCollection = db.collection('projects')
    // projectCollection.find({alias:alias}).toArray(function (err,data) {
    //     if(err){
    //         console.log(err)
    //         next(err)
    //     }
    //     else{
    //         res.render("admin/projectDetail",{
    //             layout:"admin-layout",
    //             title:"project-detail",
    //             project:data[0]
    //     })
    // } 
    
    })


module.exports = router;