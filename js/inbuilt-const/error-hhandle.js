// console.log(xyz) error comes not defined
// catch should be there 


try {
    // console.log(xyz)
    try {
        
    } catch (error) {//it should have its own catch block
        
    }
    //throw 'something nasty happend'//throw our own exception
    throw new Error('something nasty happend')
    //error
        //Error
        //reference error
        //syntax error
        //EvalError
        //URIError

    
} catch (error) {
    console.log('im in catch block',error )
    console.log('im in catch block',error.message )
    console.log('im in catch block',error.name )//type of error
    console.log('im in catch block',error.stack )
}
finally{
    console.log('in finally block')
}
console.log('hello its executing')

function foo(){
    console.log(marker)
}


function bar(){
    console.log('im in bar')
    foo()
}


function baz(){
    console.log('im in baz')
    bar()
}
try{
baz()
}
catch(error){
    console.log(error)
}


