let btn= document.querySelector('button')
let dispImg = document.querySelector('#disImg')
let inptfld = document.querySelector('input')


function getData() {
    let value = inptfld.value;
    let url=`https://api.giphy.com/v1/gifs/search?api_key=nVtFbk00fNXnP0lwMAu0Q7DQTRpJKBiX&q=${value}&limit=25&offset=0&rating=G&lang=en`

    disImg.innerHTML = ''
    fetch(url) //this is a Get request with only url
    .then(function (data) { //returns the header response like the header content info and metadata info etc
        data = data.json() //reads the body data /extracts only the body data
        return data;
    })
    .then(deta => { console.log("deta bro",deta)//returns the promise
                    deta.data.forEach(element => {
                    let url = element.images.downsized.url;
                    let img = document.createElement('img');
                    img.src = url;
                    document.body.appendChild(img)
                    });

}) 
    .catch(err => {console.log(err)
                let p = document.createElement('p')
                p.innerHTML = "Error has occured " ;
                p.style.backgroundColor = "red";
                p.style.padding = "20px";
                dispImg.appendChild(p)
                
                
                
                })
    inptfld.innerHTML = ''
    inptfld.focus()



    // postURL = 'https://jsonplaceholder.typicode.com/posts';
    // let  jsondata = {
    //     title : "Nagarjuna",
    //     body : "this is my message to the world ", 
    //     userId : 25
    // }
    // fetch(postURL ,{                          //this is a post request 
    //     method : "POST",
    //     body :JSON.stringify(jsondata),         //its the payload that u r sending
    //     headers :{ "content-type" :"application/json"} //its the header content that u r adding
    // })  .then(resp => resp.json())                       //reading only the body content
    //     .then(data => console.log("resp data",data))  //we get the same data we sent and its status response like that
    //     .catch(err => console.log("response data",err))

}

btn.addEventListener('click',getData)