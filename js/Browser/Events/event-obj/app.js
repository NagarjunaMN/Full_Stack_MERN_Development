let btn=document.querySelector('button')
btn.onclick=function(e){
    console.log(e)
    console.dir(e.target)
    console.dir(this)
}

let anchtag = document.querySelector('a')
anchtag.onclick=function(e){
    e.preventDefault()
    alert('anchor clicked')
}