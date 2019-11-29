function foo(a,b){
    return 'htllo'
}
foo.age='nagarjuna';
console.log(foo.age)
console.log(typeof foo)
//  inbuilt property name
console.log(foo.name)

//length
console.log(foo.length)//no of parameters

//constructor
console.log(foo.constructor) //inbuilt function constructor

//prototype
console.log(foo.prototype)
console.log(typeof foo.prototype)

foo.prototype.watch='titan'
console.log(foo.prototype)

 