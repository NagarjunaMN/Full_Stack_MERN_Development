// empty obj
// it holds key pair values p.s just like json

var emp_obj={};
console.log(emp_obj);
console.log(typeof emp_obj);

var course ={
    name:"javascript",
    gender:"Female",
    age:23,
    status:"who cares"
}
var result ={
    Math:20,
    Physics:30,
    Chem:23,
    "Basic Computers":66,
    "454":44,
    "if":true,
    hobbies:["watching TV","listening to Music"],
    highest_Education:{Degree:"B.E",Stream:"CS",Percentage:57.2,Passedout:2018},

    friends:[{
        name:"Rakesh",
        gender:"Male"
    },
    {
        name:"Raju",
        gender:"Male"
            }]
}

console.log(course);
console.log(result);
// 2 ways to access the value
// dot notation and bracket notation

// .notation
console.log(result.Physics);
console.log(result.hobbies[1]);
console.log(result.highest_Education.Stream);

// update property
result.Math = 100;
console.log(result);
// add a new property  
// it first checks for a key if its not available then itll create that key property
result.married=false;
console.log(result);
delete result.Physics
console.log(result);

//bracket notation
// for accessing the key value that are specified in string
console.log('bracket notation',result["Basic Computers"]);
console.log('bracket notation',result["Math"]);
var math_mar = "Math"
console.log('bracket notation',result[math_mar]);

// pass by value the other variable has value
var a=20
var b=a
a=30
console.log(a);
console.log(b);


// pass by reference the obj2 holds the reference of obj1
var obj1={name:"JS"}
var obj2=obj1
obj2.name="Javascript"
console.log(obj1.name);
console.log(obj2.name);
