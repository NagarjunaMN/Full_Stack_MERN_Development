
// accepts a parameeter a function or
//  returns a parameter which is a function is
//  called higher order function
// a func capable of returning a func is alseo called as higher order func


// callback =function that get passed to another function
// errorfirstcallback=a func where first parameter will be error
//callback hell=>callback inside callbact and go on 
function msgdisp()
{
    return "displaying message"
}
function msgcall(cb)
{
    re = cb()
    return re
}

let msg=msgcall(msgdisp)
console.log(msg)


function add(p1,p2,cb)
{
    if(typeof p1!='number'|| typeof p2!='number'){
        return cb("enter a number",null)
    }
    else{
        return cb(null,p1+p2)
    }
}
function square(x,cb){
    if(typeof x !='number'){
        cb("enter a number",null)
    }
    else{
        cb(null,x*x)
    }
}


add(5,10,function (mg,data){
    if(mg != null){
        console.log(mg)
    }
    else{
        console.log(data)
        square(data,function(err,data){
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }})
    }
})
square(5, function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

function router(){
    let a =10;
    console.log("im in 1st outer func");
    function inner(){
        let b=20;
        console.log("im in 1st inner func",a)
    }
    inner()
    // console.log(b)
}
router()


// a function which remembers its scope is called closure
//when a  function returns a function it remembers the scope or closure happens
function outer(a){
    // let a =10;
    console.log("im in outer func");
    function inner(b){//inner function remembers the value of a
        // let b=20;
        console.log("im in inner func",a)
        return a+b
        }
    return inner;
    // console.log(b)
}
let val=outer(10);//it remembers the value of a 
console.log('calling inner func',val(22))
let res=val(20);
console.log(res)


// curing i using not the values at samae time but using one by one=>cuirng
function sum(x){
    return function (y){//same as uing inner function
        return x+y
    }
}
let sumres=sum(2)
let final=sumres(2)
console.log(final)