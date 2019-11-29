let inpt = document.querySelector('input');
let btn = document.querySelector('button');
let dispList = document.querySelector('#displayList');


let items=JSON.parse(localStorage.getItem('list'))||[]

function addtodoItems(){
    
    let value = inpt.value;
    let deta = {
        value:value,
        checked:false
    }
    items.push(deta)
    localStorage.setItem('list',JSON.stringify(items))
    renderlist(items)
    inpt.value=''
    inpt.focus()
}

function renderlist(list) {
    dispList.innerHTML = list.map((ele,i) => `<li>
    <input id=inpt${i} data-id=${i} type='checkbox' ${ele.checked?'checked':''}> <label> ${ele.value} </label>
    </li>`).join('')

}

function toggle(e) {
    if(e.target.matches('input')){
        let index = e.target.dataset.id
        // console.log(index)
        if(items[index].checked){
            items[index].checked = false;
        }else{
            items[index].checked = true;
        }
        localStorage.setItem('list',JSON.stringify(items))
        renderlist(items)
    }
}

dispList.addEventListener('click',toggle)



// browser gives u some local storage on browser to add or dtore some value on it
// its added in form of key pair value
//localStorage.setItem('name','nagarjuna') //used to add value to the local storagr
//localStorage.getItem('name')//gets that items based on key value
//localStorage.removeItem('name')//removes the item based on kwy value
//localStorage.clear()    //clears all elements2
//we are using local storage because when we type normal values and refresh it itll be gone 
// if we storge it in the local storage and when we refresh it itll still be there even 
// ->if u close and open that window itll be stored there only




renderlist(items)
btn.addEventListener('click',addtodoItems);
