let hobbies = ['cricket','music','coding','reading']

let d=document.createElement('ul')
document.body.appendChild(d)
let ul= document.querySelector('ul')
for(var i=0;i<hobbies.length;i++){
    let li=document.createElement('li')
    li.innerText=hobbies[i]
    ul.appendChild(li)
}
// we crete an li elements using createElement
let head =document.createElement('h2')
head.innerText='addded dynamically'
document.body.appendChild(head)
head.setAttribute("class","firstcheck'")