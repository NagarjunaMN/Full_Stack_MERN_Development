// collection of characters
var x='10';
console.log(x);
console.log(typeof x);
console.log(typeof typeof x);

// Escape character \
// \n new line
// \t space
// \u unicode character
var y="i'm learning \"js\""
console.log(y);

var sent="hello everyone \n how are u \u0026 how is your ***"
console.log(sent);

var name="hello"
var name1="hellowwww"
var sent= name+name1
console.log(sent);

// coercion(typecasting)
var numstr= "hello"+10
console.log(numstr);

var boolstr= "hello"+true
console.log(boolstr);

var boolstr= 1+true
console.log(boolstr);

var name=`hello i'am "JS"
how are u man`
console.log(name)

var concat = `hello ${name1} nagarjuna`//cocatenation with ${} or evaluate in this ${10+20}
// ` is called back tick
console.log(concat.length)