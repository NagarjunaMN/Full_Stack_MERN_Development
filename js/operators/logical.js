// LogicL AND  &&
// LogicL OR  ||
// Logical Not !

var x=10;
var y=20;
var z=15;

console.log(x<y && y<z);
console.log(x<y && y>z);


console.log(x<y || y>z); //Lazy evaluation if any one is true the search enjine does not check for another
console.log(x>y || y<z);

var a ;
console.log(!a);

var a='' ;
console.log(!a);

var a=1 ;
console.log(!a);

var a=true ;
console.log(!a);

