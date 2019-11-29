// function add(a,b,cb){
//     if(typeof a!='number'){
//         cb('please enter aaa number',null)
//     }else{
//         cb(null,a+b)
//     }
// }

// function sqr(n,cb){
//     if(typeof n!='number'){
//         cb('please enter a number',null)
//     }else{
//         cb(null,n*n)
//     }
// }

// add(10,20,function (err,data) { 
//     if(err!=null){
//         console.log(err)
//     }else{
//         console.log(data)
//         sqr(data,function (err,sqdata) { 
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log(sqdata)
//             }})

//     }
//  })

function add(a,b) {
    return new Promise(function(resolve,reject){
        if(typeof a!='number'){
            reject(new Error('pass,a,number'))
        }else{
            resolve(a+b)
        }

    })
  }

function squr(a) {
    return new Promise(function(resolve,reject){
        if(typeof a!='number'){
            reject(new Error('square,accets,a,number'))
        }else{
            resolve(a*a)
        }

    })
  }

// add(10,20).then(function(data){
//     console.log(data)
// }).catch(function(err){
//     console.log(err)
// })
// squr(10).then(function(data){
//     console.log(data)
// }).catch(function(err){
//     console.log(err)
// })

add(10,20)
.then(data=>squr(data))
.then(data=>console.log('se',data))
.catch(err=>console.log(err))

Promise.all([add(10,20),squr(10)]).then(dt=>{console.log(dt)}).catch(err=>console.log(err))