const router = require('express').Router()
let mydata = require('../my-data').data;

router.get('/',function(req,res) {
    let feauturedBlog = parseInt(Math.random()*mydata.myBlog.length)
    res.render('blog',{
        title:"blog",
        blog:mydata.myBlog,
        blogCategories:mydata.blogCategories,
        feauturedBlog:mydata.myBlog[feauturedBlog],
        navBlog:true
    })
})

router.get('/:alias',function (req,res) {
    let alias = req.params.alias;

    let blog = mydata.myBlog.filter(ele => ele.alias == alias)[0]

    res.render('blogDetail',{
        title:blog.name,
        blog : blog,
        blogCategories:mydata.blogCategories
    })
})


module.exports = router