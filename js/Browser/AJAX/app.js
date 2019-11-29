let xhr = new XMLHttpRequest()


function handleData() {
    if(xhr.readyState < 4){return;}

    if(xhr.status != 200){return;}
    
    let dat = JSON.parse(xhr.responseText);
    let h1 = document.createElement('h1');
    h1.innerText = `UserId is ${dat.userId}`;
    let p = document.createElement('p');
    p.innerText = `title is ${dat.title}`;

    document.body.appendChild(h1)
    document.body.appendChild(p)
}




xhr.onreadystatechange = handleData

// xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)
xhr.open('GET','https://jsonplaceholder.typicode.com/albums/1',true)
xhr.send('')





// OPEN hits the api using GET request specified ,third  parameter wether hit should happen synchronously or not
// ->true for asynchronous abd false for sync
// after send it starts firing an event called onreadystatechange


// after firing its onject has something called as a readystate 
// if the ready state comes as 0 it means its uninitialised
// if the ready state comes as 1 it means its loading
// if the ready state comes as 2 it means its loaded
// if the ready state comes as 3 it means its interactive
// if the ready state comes as 4 it means its complete
// onemore property can be checked if the request is successfull or not
