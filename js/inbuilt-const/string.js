var primitivestr="hello";
var str = new String("hello");

console.log(typeof primitivestr)
console.log(typeof str)

console.log(str instanceof String)
console.log(primitivestr instanceof String)

console.log(str.length)
console.log(primitivestr.length) //backgrounf js converts the primitive dt as object (here as a string object)
                                    // and applies the properties and method ,and after it done it destroyes its object so that 
                                    //it reamins promitive itself

console.log(primitivestr[0])
console.log(str[0])
//functions on string constructor

console.log(str.toUpperCase())
console.log(primitivestr.toUpperCase())

console.log(str)//it gives as a object
console.log(str.toString())//these provides its value
console.log(str.valueOf())
//to lowercase
console.log(str.toLowerCase())

//charAt()
console.log(str.charAt(0))
console.log(primitivestr.charAt())

//indexOf()
console.log(str.indexOf('l',2))//starts from 2nd index 
console.log(str.lastIndexOf('l',2))//start searching from last but count gives from first itself

//split()
str = 'hello iam nagarjuna'
var a=str.split(' ')
console.log('split function',a)
var hy='';
for ( i=0;i<a.length;i++)
{
    var b=a[i].charAt(0)
    hy = hy+'-'+b
    //h-i-n
}
console.log(hy)
// substr
console.log(str)
console.log(str.substr(0,4))//last index is included
console.log(primitivestr.substring(1,4))//last index is not included