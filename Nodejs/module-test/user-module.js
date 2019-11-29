let myName = "Nagrjuna MN"

console.log(myName)
console.log(module)

// if any property or function or anything if wewant to export it so that we can use it in other files than we use exports

module.exports.myName = myName

console.log(module) // we can see in export there will be a value of myName

module.exports.foo = function () {
    console.log("hey there nagarjuna")
}

module.exports.bar = function () {
    console.log("hey there navgu")
}

module.exports.bar2 = function () {
    console.log("hey there bar2")
}