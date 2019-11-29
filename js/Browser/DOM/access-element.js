//getelementbytagname

let docc = document.getElementsByTagName('p');
console.log(docc)

let clsname = document.getElementsByClassName('head')
console.log(clsname)

let idname = document.getElementById('noSession')
console.log(idname)

//querySelector()
//querySelectorAll()

//like how we write in css declaration we write like that


let que=document.querySelector('p')
let quer=document.querySelectorAll('p')
console.log(que)
console.log(quer)


let firstclsele = document.querySelector('.head')
let firstclseleAll = document.querySelectorAll('.head')
console.log(firstclsele)
console.log(firstclseleAll)


let firstIdele = document.querySelector('#noSession')
console.log(firstIdele)

let formele  = document.querySelector('input[name=name]')
console.log(formele)

//we can use for other tags also
let formele1  = document.querySelector('h1[class=head]')
console.log(formele1)


