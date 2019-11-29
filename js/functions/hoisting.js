//only Declaration moves to the top outside and inside function


foo();
function foo(){
    console.log("called")
}

//foo2() gives error not a function but as declaration moves up foo2 is defned and not a function
var foo2 = function(){
    console.log("inside anony func")
}
foo2();