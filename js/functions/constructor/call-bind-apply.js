var obj={
    nam:'nag',
    desc: function (para){
        console.log('hey '+para+' '+this.nam)
    }
}


var obj2={
    nam:'nagu',

}

obj.desc.call(obj2,'this is')


function description(){
    console.log("hey ",this.nam)
}

description('')//DEFAULT itll be a empty sring
description.call(obj2) //funtion desctiption has a method call which assigns the 
                        // value of the needed object to that function,we can change thw context of the function using call (N)
description.call()//it takes global parameter which is null (to abive func description)


obj.desc("dude")
obj.desc.call(obj2,'man')

//2=>apply();

var obje={
    namm:'johnanathen',
    descr:function (para,ara2){
      
        console.log(para+' ' +ara2+' ' +this.namm)
     }
}
var obje2={
    namm:'reddy'
}

obje.descr.call(obje2,'narasimha')
obje.descr.apply(obje2,['nag is','ji'])

//bind
// it does not execute the function but returns your function bounded with that function

let d=obje.descr.bind(obje2)
console.log(d)
d('nag is','narasimha');


