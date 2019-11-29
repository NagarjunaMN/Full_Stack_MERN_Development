const fs = require('fs');
console.log('program starts')


//synchronous
// fs.writeFileSync(__dirname+'/myfile.txt','this is written by Node','utf-8')

//with callback func
fs.writeFile(__dirname+'/myfile.txt','written with fs writefile',function (err) {
    if(err){
        console.log(err);
    }else{
        console.log("succesfully written")
    }
})



console.log('program ends')


// fs.appendFile();
// fs.readdir();
// fs.rmdir();
// fs.rename();
// fs.chown();

