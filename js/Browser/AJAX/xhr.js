let xhr = new XMLHttpRequest();
function handledata() {
    console.log(xhr);
    if (xhr.readyState < 4) {
        return;
    }
    if (xhr.status != 200) {
        return;
    }
    console.log(JSON.parse(xhr.responseText));
    let dt = JSON.parse(xhr.responseText);
    let h1 = document.createElement('h1');
    h1.innerText = `userId:${dt.userId}`;
    let p = document.createElement('p');
    p.innerText = `Title:${dt.title}`;
    document.body.appendChild(h1);
    document.body.appendChild(p);
}
xhr.onreadystatechange = handledata;
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
xhr.send('');
