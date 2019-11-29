// here we use addeventListner the main diff between this and normal triggering of events is
// ->here we can trigger 2 differerntor same event for a indiv element
// ->but when we us onclick or others 2 times or 2 different events then it gets overridden

// here the first function is overridden  by the second function and its displayed
let btn=document.querySelector('button')

// btn.onclick = function () {
//     alert("anchor clicked")
// }


// btn.onclick = function () {
//     alert("anchor clicked and its displayed")
// }

// but insted of that we can use addEventListener function and trigger multiple evebts or 
// -> same events multiple times 

btn.addEventListener('click',function () {
    alert("first event triggered")
});

// btn.addEventListener('click',function () {
//     alert("same but second event is triggered")
// })

// if we want to remove an event from it then ?=>we cannot pass a function directly then what do we do?
// to solve this we make a seperate function and do remove event listner on it

function secondevnthandlr() {
    alert("second event is triggered in seperate function")
  }

btn.addEventListener('click',secondevnthandlr)

btn.removeEventListener('click',secondevnthandlr)//by this we remove a single event handler
