const router = require('express').Router()
let mydata = require('../my-data').data

router.get('/',function(req,res) {
    console.log(mydata.myProjects)
    res.render('projectList',{
        title:"projectList",
        projects : mydata.myProjects,
        navProject:true
    })
})

router.get('/:alias',function (req,res) {
    let alias = req.params.alias;
    let project = mydata.myProjects.filter(ele => ele.alias == alias)[0]
    res.render('project-detail',{
        title:project.name,
        project:project,
        navProject:true
    })
})

module.exports = router