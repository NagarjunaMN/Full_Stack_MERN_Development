const router = require('express').Router();
// let mydata = require('../my-data').data;
const projectServices = require('../services/projectService')

router.get('/',function(req,res,next) {

    //one way of calling a call back function check projectservices commented one
    // function handler(err,data) {
    //     if(err){
    //         next(err)
    //     }else{
    //         res.render('projectList',{
    //             title:"projectList",
    //             projects : data,
    //             navProject:true
    //         })
    //     }
    // }
    // projectServices.getProjects(handler)

    //another way of promise
    projectServices.getProjects()
        .then(data => {
            res.render('projectList',{
            title:"projectList",
            projects : data,
            navProject:true
        } )
        .catch(err => next(err))
    
})
})

router.get('/:alias', function (req,res,next) {
    let alias = req.params.alias;
    
    projectServices.getProjectDetail(alias)
        .then(data => {
            res.render('project-detail',{
                title:data.name,
                project:data,
                navProject:true
            })
        })
        .catch(err => next(err))

})

module.exports = router;