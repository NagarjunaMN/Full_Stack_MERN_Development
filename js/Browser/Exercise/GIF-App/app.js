let inpt=document.querySelector('input')
let btn=document.querySelector('#submitbtn')
let disImg=document.querySelector('#disImg')
function getData(){
    disImg.innerHTML = '';
    var value=inpt.value
    var xhr=new XMLHttpRequest();

    function dislayData(){
        // console.log(xhr.readyState)
        if (xhr.readyState<4){
            return;
        }
        if (xhr.status!==200){
            return;
        }
        let data=JSON.parse(xhr.responseText);
        let imgs=data.data.images
        console.log(imgs)
        Object.keys(imgs).forEach(ele=>{
            let dt=imgs[ele];
            let img=document.createElement('img');
            img.src=dt.url
            disImg.appendChild(img)

        })
    }
    xhr.onreadystatechange= dislayData;
    xhr.open('GET',`https://api.giphy.com/v1/gifs/translate?api_key=nVtFbk00fNXnP0lwMAu0Q7DQTRpJKBiX&s=${value}`,true)
    xhr.send('')
        

}

btn.addEventListener('click', getData); 