// shorter way to write a func, 
let ad=function(a,b){
    return a+b;
}
let add = (a,b)=>{
    return a+b;
}
console.log(add(2,3))
// let squ=(x)=>{return x*x;}
let squ=x=>x*x;
console.log(squ(5))

// function outer(x){
//     return function(y){
//         return x+y
//     } 
// }
let outer = x=>y=>x+y; //same as above commented
let res=outer(10)
console.log(res(20))