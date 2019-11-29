for(i=1;i<=10;++i){
    console.log(i)
}
// infinite loop
// for(i=1; ;++i){
//     console.log(i)
// }
i=1
// for(;;){
//     console.log(i)
// }
for(i=10;i>=1;i--){
    console.log(i)
}

for(i=1;i<=20;i++){
        if(i%2==0){
            console.log(i)
        }    
}


for(i=1;i<11;++i){
    for(j=1;j<11;++j){

    console.log(`${i}*${j}=`,i*j)
    // console.log("3*"+i+"=",3*i)
}}

// for lloop for array
arr=[10,20,30,40,50]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
    
}

var nums=[2,5,16,20]
var res=[]
for(i=1;i<=nums.length;++i){
    console.log('dwdd',nums[i])
    res.push(nums[i]*2)
    
}
console.log("new array",res)