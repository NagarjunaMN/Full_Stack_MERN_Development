function person (name,gender)
{
    console.log(this)
    this.name=name;
    this.gender=gender
    this.desc=function (){
        console.log("i am in this func")
    }
}

let p=new person('javascript','male') //this poins to a new creataed object person
console.log(p)
p.desc()
let m=person('nagarjuna','male')//points to the global window object and name and gender are added as a global parameters
console.log(m)//undefined because its not returning anything

console.log('.constructor roerty',p.constructor)

var obj1={
    name:'nagarjuna',
    age:23
}
console.log(obj1.constructor)//predefined construcor called object is called
console.log(person.constructor)//predefined constructor called function is called

let sum = new Function('a','b','return a+b')
console.log(sum(3,3))
console.log(typeof sum)