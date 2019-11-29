// to use that files myname we have to include that file in here we do that by require

let user = require("./user-module") //and we give path of that  file

let bar2 = require("./user-module").bar2 // accesses bar2 func only


// require() returns the exports object that we exported in other file i,e returns module.exports object. p.s exports isa object 


// since we required that wholefile  that file also gets executed along with this
console.log("Required user",user)//the myname object is returned as we exported that in prev file
console.log("users myname",user.myName) //from exports object myNmae property was there so we used that

// we added a function in that file and calling in here
user.foo();
user.bar();
bar2();