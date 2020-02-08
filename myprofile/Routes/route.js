let mydata = require('../my-data').data;
const router = require('express').Router()
const request = require('request')


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

router.post('/signin', function (req,res,next) {
    let body = req.body
    // console.log("Signin value details",body)

    let head = {
        method:"POST",
        uri:"http://localhost:3002/api/users/signin",
        body:body,
        json:true
    }

    request(head,function (err,response,body) {
        if(body.error){         
            res.render('signin',{
                layout:"Signin-layout",
                title:"signin",
                navAdmin:true,
                message:body.error,
                err:true
            })
        }else{
            req.session.isLoggedin = true;
            req.session.user = body.data
            res.redirect('/admin')            
        }
    })
})       

router.post('/signup', function (req,res,next) {
    let body = req.body

    let head = {
        method:"POST",
        uri : "http://localhost:3002/api/users/signup",
        body:body,
        json:true
    }

    request(head,function (err,response,body) {
        if(body.error){         
            res.render('signup',{
                layout:"Signin-layout",
                title:"signup",
                navAdmin:true,
                message:body.error.message,
                err:true
            })
        }else{
            console.log(JSON.stringify(body))
            res.redirect('/signin')
        }
    })
    // console.log("Signup details",body)
    // res.redirect('/signin')
})




router.get('/signout', function (req,res) {
    req.session.isLoggedin = false;
    req.session.user = {}
    res.redirect('/signin');
})


module.exports = router
