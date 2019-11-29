function gadget(name,color){
    this.name=name;
    this.color=color;

}

gadget.price=200;
console.log(gadget.price)
gadget.prototype.company='google'

var watch=new gadget('titan','balck')

var marker=new watch.constructor('camlin','blue')
console.log('watch.constructor',watch.constructor)
console.log('watch.name',watch.name)
console.log('marker obj',marker)
console.log('watch.price',watch.price)
console.log('watch.company',watch.company)//it checks for its property if not there it finds its constructor and its prototype property it considers
console.log('watch.constructor.prototype',watch.constructor.prototype)//we can find company property here


// prototype chaining
console.log(watch.hasOwnProperty('company'));
console.log(watch.constructor.hasOwnProperty('comany'))
console.log(watch.constructor.prototype.hasOwnProperty('company'));
console.log('trying to find toString')

console.log(watch.hasOwnProperty('toString'));
console.log(watch.constructor.hasOwnProperty('toString'));
console.log(watch.constructor.prototype.hasOwnProperty('toString'));


console.log(Object.hasOwnProperty('toString'));
console.log(Object.constructor.prototype.hasOwnProperty('toString'));


