let n='12'
let num = parseInt(n)
console.log(typeof num)

console.log(parseInt(110,8)) //second arameter is 2-binary 8-octal

let f='12.02'
console.log(parseInt(f))//12 will come
console.log(parseFloat(f))

let notnum=12*'hello'
console.log(isNaN(notnum))

//is finite
let finite=1e309
console.log(finite)
console.log(isFinite(finite))

//copy the whole object to another object seprately
//passing and comarison of obj
var obj={
    name:'nag',
    gender:'male'
};
let obj2={
    
}
//adds obj on obj2 if somethings are there in obj2 it meges if it has same attr then it overrides
Object.assign(obj2,obj)
console.log('after assign',obj==obj2)
console.log(obj2)
console.log(obj)


let person1={
    name:'nagarjuna'
}
let person2={
    name:'nag'
}
//json
console.log(JSON.stringify(person1))
console.log('comare 2 obj',person1===person2)
console.log(JSON.stringify(person1)==JSON.stringify(person2))