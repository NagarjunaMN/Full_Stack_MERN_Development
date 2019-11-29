var name = "Jas"

console.log(name == "Js")
if (name == "Js"){
    console.log("inside if stmt true",name)
}
else{
    console.log("inside else stmt false",name)
}
var lang = "Java"

if (lang == "Js"){
    console.log("lang is js")
}
else if (lang == "Java"){
    console.log("lang is Java")
}
else if (lang == "python"){
    console.log("lang is python")
}
else{
    console.log("none")

}

var num =2041671;
if (num%2 == 0){
    console.log("even")
}
else{
    console.log("odd")
}

acPrice=50000
if (acPrice >2000 && acPrice <= 5000){
    console.log("discount of 500 and total price is",acPrice-500)
}
else if(acPrice >= 10000){
    console.log("discount of 1000 and total price is",acPrice-1000)
}
else if(acPrice <= 2000){
    console.log("pay original price of",acPrice)
}
else{
    console.log("none")
}


num=10;
res= (num%2 ==0)?'even':'odd'
console.log("ternary",res)


