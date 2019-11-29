// this keyword points to current object
// points to global object it shows all global object
console.log(this)//displays thwe window object
var a =10;
console.log(this)//displays the global var in the window object

function call(){
    console.log('inside a func',this)
}
//when we call likw this we say as a function call
call()

var obj={
    name:'nagarjuna',
    desc:function (){
        console.log(this)//diaplays this current object
        function inner(){
            console.log(this) //displays the window object
        }
        inner()
    }
}
//this as a method call
obj.desc()