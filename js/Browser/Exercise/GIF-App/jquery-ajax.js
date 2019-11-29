let inpt=document.querySelector('input')
let btn=document.querySelector('#submitbtn')
let disImg=document.querySelector('#disImg')

function getData(){

    var value=inpt.value
    var xhr=new XMLHttpRequest();
    disImg.innerHTML=''
    let url=`https://api.giphy.com/v1/gifs/search?api_key=nVtFbk00fNXnP0lwMAu0Q7DQTRpJKBiX&q=${value}&limit=25&offset=0&rating=G&lang=en`
    console.log(value)
    $.ajax({
        method:'GET',
        url:url,
        success:function(data){
            console.log('success',data)
            data.data.forEach(ele => {
            console.log(ele.images)
            imgurl = ele.images.downsized.url
            let img = document.createElement('img');
            img.src=imgurl;
            disImg.appendChild(img)
            });
    
        
        
        
        },
        error:function(data){
            console.log('Error',data)

        }
    })
}


btn.addEventListener('click', getData);