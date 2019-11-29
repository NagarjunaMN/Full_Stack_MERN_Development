let para=document.querySelector('.first')
para.remove()

// removeChild

let em=document.querySelector('p.yu')
let emm=document.querySelector('em')
console.log(em.hasChildNodes())
console.log(emm.parentNode.removeChild(emm))