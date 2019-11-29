function gF(){
    this.gFname='grandfather'
}
function parent(){
    this.Pname='parent'
}
function person(name){
    this.name=name
}

parent.prototype = new gF();
person.prototype = new parent();


let me=new person('nagarjun')
//instance of operator
console.log(me instanceof person)
console.log(me)
console.log('\n')
console.log(me.name)
console.log(me.Pname)
console.log(me.gFname)