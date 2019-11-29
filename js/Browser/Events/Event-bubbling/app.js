

// event bubbling happens when children and parent have same kind of events like onclick() 
// like when we click anctag we are clicking both ul and li as anc tag is
// ->inside li and li is inside ul and all events are triggered




let ultag = document.querySelector('#ulEle')
let litag = document.querySelector('#liEle')
let anctag = document.querySelector('#ancEle')


// ultag.onclick = function () { 
//     alert("ul clicked")
//  }


// litag.onclick = function () { 
//     alert("li clicked")
//  }


// anctag.onclick = function () { 
//     alert("anc clicked")
//  }

// to stop this js provides a function
//now when we click only that event is triggered

ultag.onclick = function (e) { 
    alert("ul clicked")
 }


litag.onclick = function (e) { 
    e.stopPropagation()
    alert("li clicked")
 }


anctag.onclick = function (e) {
    e.stopPropagation() 
    alert("anc clicked")
 }
