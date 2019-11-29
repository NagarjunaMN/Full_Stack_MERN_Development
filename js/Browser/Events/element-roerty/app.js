// let btm=document.querySelector('button')
// btm.onclick=chgcol

// function chgcol(){
//     alert('clicked')
// }
let bd=document.querySelector('body')
let btm=document.querySelector('button')
btm.onclick=function()
{
    bd.style.backgroundColor=`rgb(${randnum(1,255)},${randnum(1,255)},${randnum(1,255)})`
}

function randnum(min,max){
    return parseInt(Math.random()*(max-min)+min);
}
