let mydata = require('../my-data').data;
const router = require('express').Router()

const mongoClient = require('mongodb').MongoClient;
let db;
mongoClient.connect('mongodb://localhost:27017',{ useUnifiedTopology: true ,useNewUrlParser:true},function(err,client){
    if(err){
        console.log("error in mongo",err)
    }
    else{
    console.log("mongodb connected")
    db = client.db('portfolio')
    }
});
// const client = new MongoClient("mongodb://localhost:27017", { useNewUrlParser: true ,useNewUrlParser:true });
// client.connect(err => {
//   console.log("mongo connected")
//   db = client.db("portfolio")
  // perform actions on the collection object
  
// });

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
    
    




router.get('/', function(req,res) {
    console.log(req.session)
    res.render('index',{
        layout:"Homelayout",
        title:"Home",
        navHome:true
    })
})


router.get('/contact', function(req,res) {
    res.render('contact',{
        title:"contact",
        navContact:true
    })
})


router.post('/contact', function (req,res) {
    let body = req.body
    console.log(body)

    res.status(201).json({
        message:"thanks for contacting us",
    })
})


// module.exports.blog = function(req,res) {
//     let feauturedBlog = parseInt(Math.random()*mydata.myBlog.length)
//     res.render('blog',{
//         title:"blog",
//         blog:mydata.myBlog,
//         blogCategories:mydata.blogCategories,
//         feauturedBlog:mydata.myBlog[feauturedBlog],
//         navBlog:true
//     })
// }



router.get('/signin', function (req,res) {
    res.render("signin",{
        layout:"Signin-layout",
        title:"signin",
        navAdmin:true
    })
})


router.get('/signup', function (req,res) {
    res.render("signup",{
        layout:"Signin-layout",
        title:"signup",
        navAdmin:true
    })
})

router.post('/signin', function (req,res) {
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

})

router.post('/signup', function (req,res) {
    let body = req.body
    console.log("Signup details",body)
    res.redirect('/signin')
})




// module.exports.blogDetail = function (req,res) {
//     let alias = req.params.alias;

//     let blog = mydata.myBlog.filter(ele => ele.alias == alias)[0]

//     res.render('blogDetail',{
//         title:blog.name,
//         blog : blog,
//         blogCategories:mydata.blogCategories
//     })
// }




router.get('/signout', function (req,res) {
    req.session.isLoggedin = false;
    req.session.user = {}
    res.redirect('/');
})


module.exports = router
