var sum=function (a,b){
    return a+b;
}
var res=sum(2,3)
console.log(res)
//Named function expression =>NFE
var sum=function add(a,b){
    return (a,b);
}
 //var res=add(2,3)// returns error cannot call with func name thus namedFE
var res=sum(2,3)
console.log(res);


//Ue of Anonymous FUnction(which has no name)
// 1.)self executing function (can executed only once)
// 2.)Callbacks
(function(){
    console.log("inside anonymous func");
})();
(function(a,b){
    console.log("inside anonymous func",a+b);
})(2,5);
//callback

function callback(){
    console.log("iam a call back")
}
function calleeback(cb){
    cb()
}
calleeback(callback)
calleeback(function(){
    console.log("iam inside the callback anony func")
})