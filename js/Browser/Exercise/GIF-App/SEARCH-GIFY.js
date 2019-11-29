let inpt=document.querySelector('input')
let btn=document.querySelector('#submitbtn')
let disImg=document.querySelector('#disImg')
function getData(){
    disImg.innerHTML = '';
    
    var value=inpt.value
    var xhr=new XMLHttpRequest();

    function dislayData(){
        // console.log(xhr)
        if (xhr.readyState<4){
            return;
        }
        if (xhr.status!==200){
            return;
        }
        let data=JSON.parse(xhr.responseText)
        data.data.forEach(ele => {
            console.log(ele.images)
            imgurl = ele.images.downsized.url
            let img = document.createElement('img');
            img.src=imgurl;
            disImg.appendChild(img)
        });

        }
        xhr.onreadystatechange= dislayData;
        xhr.open('GET',`https://api.giphy.com/v1/gifs/search?api_key=nVtFbk00fNXnP0lwMAu0Q7DQTRpJKBiX&q=${value}&limit=25&offset=0&rating=G&lang=en`,true)
        xhr.send('')
        
    }
        



btn.addEventListener('click', getData); 