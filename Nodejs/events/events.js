let event = require('events')//we dont give path as it checks the whole computer
let emitter =new event.EventEmitter();

emitter.on('knock',function(){
    console.log("whos there");
});
emitter.on('knock',function(){
    console.log("what do u want");
});

// emitter.on('knock',()=>console.log('3'))
// emitter.on('knock',()=>console.log('4'))
// emitter.on('knock',()=>console.log('5'))
// emitter.on('knock',()=>console.log('6'))
// emitter.on('knock',()=>console.log('7'))
// emitter.on('knock',()=>console.log('8'))
// emitter.on('knock',()=>console.log('9'))
// emitter.on('knock',()=>console.log('10'))

emitter.emit('knock')

emitter.emit('knock')


emitter.once('mail',function(){
    console.log("mail sent")
})

emitter.emit('mail')
emitter.emit('mail')

emitter.on('myname',function(firstName,lastName){
    console.log(`my name is ${firstName} ${lastName}`)
});

emitter.emit('fullName','java','script')