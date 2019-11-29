// Data structure helps us to store and retrieve data effectively

// empty array
var emptrarr =[]
console.log(emptrarr);

// results M.P.C.B
var results =[20,30,4,50]
console.log(results);
console.log("type",typeof results);

// different DT
var lists=['hello',20,20.12,false,[20,30,10],null]
console.log(lists);
console.log(lists[0]);
console.log(lists[4][1]);

// properties
console.log(results.length);
results[1] = 33
results[4] = 60
results[10] = 60
console.log('after modifying has emty saces',results);//if we try to access [8] itll give undefined value
console.log(results[8]);//if we try to access [8] itll give undefined value
results[10]=null
console.log('after assigning 10th index to null',results);

//Methods (push,pop)
// Push -> adds a element at the last
// pop -> removes the element from the lost
 var arrPUSHandPOP =[]
 arrPUSHandPOP.push("hello")
 arrPUSHandPOP.push(20)
 console.log(arrPUSHandPOP);
 arrPUSHandPOP.pop()
 console.log(arrPUSHandPOP);
 console.log(typeof arrPUSHandPOP); //object
