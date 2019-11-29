let para=document.querySelector('#noSession');

// para.innerText= 'udated dynamically <a herf=#>google<a>'
para.innerHTML= 'udated dynamically <a href="#">google</a>' //a comes as link


let node=document.querySelector('#sess')
console.log(node.hasChildNodes())
node.childNodes[1].innerText = 'not node js'

// Walkdom(node)
//it should rint all its child element


//accessing style object
para.style.color='red';
para.style.border='1px solid blue';


//shortening the applying of style sheet
node.style.cssText='background-color:red;color:green'


