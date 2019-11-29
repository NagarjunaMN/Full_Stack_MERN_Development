/* ...variable=>
REST >converts comma seerated values to an array
spread >converts array to comma seperated values
*/
function add(...args){
    console.log(args)
    console.log(...args)
}

add(234,545,63,66)
add(234,545)

let arr=[54,456,5,46]
let larg=Math.max(...arr)
console.log(larg)//to find the biggest element
