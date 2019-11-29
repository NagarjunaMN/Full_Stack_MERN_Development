const pi=3.14159
// pi=3.5441  its costant
console.log(pi)

const  obj1={
    name:"nagarjuna",
    age:23
}
// obj1={name:"helo"} error
obj1.name="nagarhuna mn"//const does not hold the access of inside values but reference
console.log(obj1)


if (true){
    let b=20;
    console.log(b)
}
// console.log(b)

var x=10
function foo(){
    console.log(x);
    let x=20;
    console.log(x)
}
foo()
