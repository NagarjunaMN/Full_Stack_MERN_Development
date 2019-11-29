//math pi
console.log(Math.PI)

//sqrt
console.log(Math.SQRT2)

//euler's constanat

console.log(Math.E)

//log 10
console.log(Math.LN10)

//ln2
console.log(Math.LN2)

//power
console.log(Math.pow(10,2))

//max
console.log(Math.max(11,2,45,67))

//min
console.log(Math.min(11,2,45,67))

//round methods
    //ceil() to value
    //floor() bottom value
    //round() nearest value

    let num=10.4
    console.log(Math.ceil(num))
    console.log(Math.floor(num))
    console.log(Math.round(num))

//sqrt
console.log(Math.sqrt(9))

//log10
console.log(Math.log10(23))

//random
console.log(Math.random()*10)

//to do range
function randran(min,max){
    return parseInt(Math.random()*min+(max-min))
}
console.log(randran(5,10))