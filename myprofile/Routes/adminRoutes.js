const router = require('express').Router()
const path = require('path')
const multer = require('multer')
const fs = require('fs');
const unzip = require('node-unzip-2')


const projectServices = require('../services/projectService')
const uploadServices = require('../services/uploadServices')


const storage = multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null, path.join(__dirname,'../static/images'))
    },
    filename:function (req,file,cb) {
        cb(null,file.originalname)
    }
})

let uploads = multer({storage:storage})


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

    
})

router.get("/projects/create-new", function (req,res) {
    res.render("admin/createNewProject",{
        title:"New Project",
        layout:"admin-layout"
    })
})


router.post("/projects/create-new",function (req,res,next) {
    let bodyData = req.body
    // bodyData.alias = bodyData.name.split(' ').join('-').toLowerCase()

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


    
    })

router.post('/projects/:alias/update',function (req,res,next) {
    let alias = req.params.alias
    let bodyData = req.body
    let classes = ['info','danger','warning','primary','success']
    
    bodyData.updatedOn = Date.now();

    bodyData.tags = bodyData.tags.split(',').map((ele,i) => {
        return {
            name:ele,
            class : classes[i]
        }})
        
    projectServices.updateProject(alias,bodyData)
        .then(data => {
            console.log(data)
            res.redirect('/admin/projects')
        })
        .catch(err => next(err))

    })

router.get('/projects/:alias/delete',function (req,res,next) {
    let alias = req.params.alias
    projectServices.deleteProject(alias)
        .then(data => {
            console.log(data)
            res.redirect('/admin/projects')
        })
        .catch(err => next(err))
})


router.get('/projects/:alias/uploadimg',function(req,res,next){
    let alias = req.params.alias;
    res.render("admin/uploadimg",{
        layout:"admin-layout",
        title:"Upload Image",
        path:`/admin/projects/${alias}/uploadimg`
    })
})

router.post('/projects/:alias/uploadimg',uploads.single('img'),function (req,res,next) {
    let alias = req.params.alias;
    let file = req.file
    console.log('alias -->',alias)
    console.log("file -->",file)
    projectServices.updateProject(alias,{'image':`/images/${file.originalname}`})
        .then(data => {
            console.log(data)
            res.redirect('/admin/projects')
       })
        .catch(err => next(err))

})

router.get('/projects/:alias/upload-demo',function (req,res) {
    let alias = req.params.alias;
    res.render('admin/uploadimg',{
        layout:'admin-layout',
        title:"Upload File",
        path : `/admin/projects/${alias}/upload-demo`
    })
})

router.post('/projects/:alias/upload-demo',function (req,res,next) {

    let alias = req.params.alias;
    let filename = `${alias}.zip`;
    let dir = path.join(__dirname,`../static/upload-Demo/${alias}`)

    function  handler(err , success) {
        if(err){
            next(err)
       }else{

            fs.createReadStream(dir+'/'+filename).pipe(unzip.Extract({ path: dir }));
            fs.unlinkSync(dir);
            res.redirect('/admin/projects')
     }
     }

    uploadServices.uploadDemo(req,res,filename,dir,handler)
})
module.exports = router ;