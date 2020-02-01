
let form = document.querySelector('#formContact');
let respdisp = document.querySelector('#respDisp');
console.log("im coming in javascript page");

function formHandler(e) {
    e.preventDefault();
    let data = {
        name : document.querySelector('input[name=name]').value,
        email : document.querySelector('input[name=email]').value,      
        phone : document.querySelector('input[name=phone]').value, 
        description : document.querySelector('textarea[name=description]').value
    }
    console.log("inside onsubmit function",data)

    fetch('/contact',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })

    .then(res => res.json())
    .then(respdata => {
        console.log(respdata)
        respdisp.innerHTML = respdata.message;  
        respdisp.style.color = 'green';
        form.reset();

    })
    .catch(err => {console.log(err)
    respdisp.innerHTML = "something happend,check ->"+err;
    respdisp.style.color ="red";
    form.reset();
})
}



form.addEventListener('submit',formHandler);