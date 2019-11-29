// if we declare a variabke inside a block it can be acessed globally nut
// if we declare a variabke inside a function it can be acessed only ibside its function
// block  scoping
var a=10;
if(true){
    var b=30;
    console.log("inside block",a)
    console.log("inside block b",b)
}
console.log("outside block b",b)
//function scoping
function foo(){
    var c=30 //declared in the function scope 
    d=40 // declared in the global scope 
    console.log("inside func a",a)
    console.log("inside func b",b)
    console.log("inside func c",c)
    console.log("inside func d",d)
}
foo()
// console.log(c)//gives error
console.log("doesnt ",d)


