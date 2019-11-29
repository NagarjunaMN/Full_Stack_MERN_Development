var arr = [10,20,30]
var arr2 = new Array(10,20,30,40,5,0,60,4,2,8,4,5)
var arr3 = new Array(10)// it consides at empty array with size 10

console.log('tyepof prim array',typeof arr)
console.log('tyepof object array',typeof arr2)
console.log('tyepof object array',typeof arr3)

//methdods
//push elements to last index
arr2.push(40)
console.log(arr2)

//pop remove last index
arr2.pop()
console.log(arr2)

//shifr=t and unshift

arr2.unshift(23)
console.log(arr2) //adds an elements from start

arr2.shift()
console.log(arr2) //removes the fist element

//join()

console.log('join method',arr2.join())
console.log('join method',arr2.join('-'))

//slice
arr2=[10,20,30,40,50,60,70]
console.log(arr2.slice(0,4))//last index not included

//splice()
console.log('before splicing',arr2)
console.log('splicing',arr2.splice(0,2))//takes starting index and delete count and deletes no of elements
console.log('after splicing',arr2)
console.log(arr2.splice(0,1,500,600))//after delete count we can add these elements
console.log(arr2)

// let unsorted=[2,4,9,8,7,3] works
let unsorted=[2,4,9,8,7,5,3] //doesnt work
console.log(unsorted.sort())

//foreach
let mul=[]
unsorted.forEach(function(ele,i,aray){
    console.log(ele)//element
    console.log(i)//index
    console.log(aray)//the array
    mul.push(ele*2)
})
console.log(mul)


//by applying the function by prototype we can call through that array and apply the function


Array.prototype.add=function(){
    let result=0;
    for (var i=0;i<this.length;i++){
        result+=this[i]
    }
    return result
}

var a= arr2.add()
console.log("array prototype",arr2)
console.log("array prototype",a)


// we cam override a existoing meethos also

//Array.prototype.push = function(){
  //  console.log("hello")
//}
//arr.push() //overridden
