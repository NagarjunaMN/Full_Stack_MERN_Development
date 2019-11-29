console.log(document)

console.dir(document)

//
console.log(document.documentElement)

//childnodes
console.log(document.documentElement.childNodes)

//body
console.log(document.documentElement.childNodes[2])

//childnode
console.log(document.documentElement.childNodes[2].childNodes)

//para
console.log(document.documentElement.childNodes[2].childNodes[7])

//innertext of it
console.log(document.documentElement.childNodes[2].childNodes[7].innerText)

//modifying
document.documentElement.childNodes[2].childNodes[7].innerText = 'celebrate today itself'

//directly we can access body
console.dir(document.body)

