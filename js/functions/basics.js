// function Funcname(){
//     body
// }
function myfunc(a,b){
    res=a+b;
    console.log("sum is",res)
}
myfunc(2,5);
myfunc(9,5);

function myfunc2(a,b){
    res=a+b;
    return res;
    var res=a+b; //whatever returns after not available execution stops at retur
}
res=myfunc2(2,5);
console.log("func2 sum is",res)
res1=myfunc2(9,5);
console.log("func2 sum is",res1)


function myfunc3(a,b){
    
    if (typeof a != 'number'){
        return 'error enter a number'
    }
    res=a+b;
    return res;
    var res=a+b; //whatever returns after not available execution stops at retur
}
res=myfunc3("birGI",5);
console.log("func3 sum is",res)
res1=myfunc3(9,9);//IF LESS no of parameters are given itll return NaN of excess parameters are given it ignores those extra parameters
console.log("func3 sum is",res1)

// argument parameter

function add(a,b,c,d,e){
    console.log("arguments ARE",arguments)
    sum=0;
    for (var i=0;i<arguments.length;i++){
        sum=sum+arguments[i]
    }
    console.log("the sum with args is",sum)
}
add(20,30,40,50,90)

function even_odd(a){
    if(a%2==0){
        return 'even'
    }
    else{
        return 'odd'
    }
}
resullt=even_odd(551)
console.log("the reslt is",resullt)