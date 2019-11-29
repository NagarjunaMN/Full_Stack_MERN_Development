

//same as javascript after 2 secs itll execute
setTimeout(function () {
    console.log("Timeout Function inside it")
},0);

// for every ineterval it executes 
let counter = 1; 
setInterval(function(){
    console.log("i keep on executing ")
    if (counter == 5){
        clearInterval(this);
    }
    counter++;
},2000);

// console.log("inteval idr",id) has some functions

// setImmediate
// immediately it starts executing it gets 1st priority
setImmediate(function () { 
    console.log("immediate execution");
});

// its dependant on event loop where the execution is happening 
// what is the settimout the time is given 0 then timeout func will be executed
// node actually sets the priority
