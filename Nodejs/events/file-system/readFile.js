const fs = require('fs');
const path = require('path');

console.log('progeram starts')
let pth = path.join(__dirname,"../events.js")

console.log(pth)

//synchronous


let data = fs.readFileSync(pth,'utf-8')
// console.log(data)



//asynchronous
fs.readFile(pth,'utf-8',function(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})