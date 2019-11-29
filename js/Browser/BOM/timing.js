//after a set of time the code can execute

let v=setTimeout(function (){
    console.log('wait for 2 secs to dislay this')
},1000);//it take time in milli sec
clearTimeout(v)


// for(let i=0;i<=3;i++){
//     setTimeout(function(){
//         console.log(i)
//     },5000)
// }

//setInterval
var id=setInterval(() => {
    console.log('every second itll execute')
}, 10000000000);
console.log(id)


//clearinterval stops the execution
// var counter=1
// var id=setInterval(function() {
//     if(counter==5){
//         clearInterval(id)
//     }
//     console.log('every second itll execute and stop after 5secs')
//     counter++
   
// }, 1000);
// console.log(id)

let counter=1;
var id = setInterval(function () {
    
    if (counter<=5) {
        console.log('executing',counter)
        counter++;        
    }else{
        clearInterval(id)
    }
},1000)