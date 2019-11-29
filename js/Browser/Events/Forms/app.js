let form=document.querySelector('form')
let errorpara=document.querySelector('#error')
// form.onsubmit=validateForm

// function validateForm(e){
//     e.preventDefault()
//     let name = document.querySelector('input[name=name]').value;
//     let email = document.querySelector('input[name=email]').value;
//     let phone = document.querySelector('input[name=phone]').value;
//     if(!name){
//         errorpara.innerText='Enter a name dude'
//         errorpara.style.color='red'
//     }
//     if(!email){
//         errorpara.innerText='Enter a email dude'
//         errorpara.style.color='red'
//     }
// }

// firing a an event when he moves to another fiels
// let nameField = document.querySelector('input[name=name]');
// nameField.onblur=function(){
//     let val=nameField.value;
//     if(!val){
//         errorpara.innerText='Enter a name dude'
//         errorpara.style.color='red'
//         nameField.style.border='1px solid red'
//     }else{
//         errorpara.innerText=''
//         nameField.style.border='1px solid green'
//     }
// }

let emailField = document.querySelector('input[name=email]');
emailField.onfocus=function(){
    errorpara.innerText='Enter a email dude'
    errorpara.style.color='blue' 
}



