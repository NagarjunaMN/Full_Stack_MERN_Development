let outer = document.querySelector('#outer');
let inner = document.querySelector('#inner');
let btn = document.querySelector('button');


// we do similar to event bubbling
// here a third parametr is added to addeventListner that is boolean (true/false)
//which specifies how bubbling occurs
// for your remembering hotshot bubbling happens when u click inside button inside ,outer and its outer are also clicked (check event-bubbling)


// here if u specify the third parameter as true then bubbling happens outside in (i think)i,e first outside is clicked then inner box is clicked and
// ->then inner button is clicked

// by using stopPropagation like in previous event bubbling its stopping at the button itself not going to outer if u are using in button 
// -> similarly if u use stop propagation at hte outer itself it wont go to inner and button
outer.addEventListener('click',function (e) { 
     
    alert("outer div clicked")
},true);

inner.addEventListener('click',function (e) {
    // e.stopPropagation()
    alert("inner div clicked")
},true);

btn.addEventListener('click',function (e) {
    alert("button clicked")
},true);
