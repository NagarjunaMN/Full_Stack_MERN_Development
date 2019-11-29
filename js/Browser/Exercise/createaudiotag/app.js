let anchtag = document.querySelector('a')
let audtag = document.createElement('audio')
document.body.appendChild(audtag)
anchtag.onclick = function(e){
    e.preventDefault()
    audtag.src = anchtag.href
    audtag.controls=true
    audtag.play()

   
}