let bd=document.querySelector('body')

function randnum(min,max){
    return parseInt(Math.random()*(max-min)+min);
}
bd.style.backgroundColor=`rgb(${randnum(1,255)},${randnum(1,255)},${randnum(1,255)})`
