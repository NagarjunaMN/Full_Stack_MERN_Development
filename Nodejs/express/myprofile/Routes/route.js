let mydata = require('../my-data').data


module.exports.home = function(req,res) {
    console.log(req.session)
    res.render('index',{
        layout:"Homelayout",
        title:"Home",
        navHome:true
    })
}


module.exports.contact = function(req,res) {
    res.render('contact',{
        title:"contact",
        navContact:true
    })
}


module.exports.doContact = function (req,res) {
    let body = req.body
    console.log(body)

    res.status(201).json({
        message:"thanks for contacting us",
    })
}


// module.exports.projects = function(req,res) {
//     console.log(mydata.myProjects)
//     res.render('projectList',{
//         title:"projectList",
//         projects : mydata.myProjects,
//         navProject:true
//     })
// }

module.exports.blog = function(req,res) {
    let feauturedBlog = parseInt(Math.random()*mydata.myBlog.length)
    res.render('blog',{
        title:"blog",
        blog:mydata.myBlog,
        blogCategories:mydata.blogCategories,
        feauturedBlog:mydata.myBlog[feauturedBlog],
        navBlog:true
    })
}

// module.exports.projDetail = function (req,res) {
//     let alias = req.params.alias;
//     let project = mydata.myProjects.filter(ele => ele.alias == alias)[0]
//     res.render('project-detail',{
//         title:project.name,
//         project:project,
//         navProject:true
//     })
// }


module.exports.signin = function (req,res) {
    res.render("signin",{
        layout:"Signin-layout",
        title:"signin",
        navAdmin:true
    })
}


module.exports.signup = function (req,res) {
    res.render("signup",{
        layout:"Signin-layout",
        title:"signup",
        navAdmin:true
    })
}

const users = [
{
    name:"user",
    email:"test@test.com",
    password:"test"
},
{
    name:"nagarjuna",
    email:"nag@nag.com",
    password:"nag"
}
]


module.exports.Dosignin = function (req,res) {
    let body = req.body
    console.log("Signin value details",body)
    let user = users.filter(ele => ele.email == body.email)
    console.log(user)
    if(user.length > 0){
        if(user[0].password == body.password){
            req.session.isLoggedin = true;
            req.session.user = user[0]
            res.redirect('/admin')
        }else{
            res.render('signin',{
                layout:"Signin-layout",
                title:"signin",
                navAdmin:true,
                message:"Incorrect mail/Password",
                err:true

            })
        }
    }else{
        res.render('signin',{
            layout:"Signin-layout",
            title:"signin",
            navAdmin:true,
            message:"Incorrect email.password",
            err:true
        })
    }

}

module.exports.Dosignup = function (req,res) {
    let body = req.body
    console.log("Signup details",body)
    res.redirect('/signin')
}

module.exports.admin = function (req,res) {
    res.render('admin/admin',{
        layout:"admin-layout",
        title:"admin"
    })
}

module.exports.adminProjects = function (req,res) {
    res.render('admin/projects',{
        layout:"admin-layout",
        projects:mydata.myProjects,
        title:"projects"
    })
}


module.exports.blogDetail = function (req,res) {
    let alias = req.params.alias;

    let blog = mydata.myBlog.filter(ele => ele.alias == alias)[0]

    res.render('blogDetail',{
        title:blog.name,
        blog : blog,
        blogCategories:mydata.blogCategories
    })
}


module.exports.adminProjectsDetail = function (req,res) {
    let alias = req.params.alias;

    let project = mydata.myProjects.filter(ele => ele.alias == alias)[0]
    res.render("admin/projectDetail",{
        layout:"admin-layout",
        title:"project-detail",
        project:project
    })
}

module.exports.signout = function (req,res) {
    req.session.isLoggedin = false;
    req.session.user = {}
    res.redirect('/');
}