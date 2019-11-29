const fs = require('fs');

let data = 'there is no guarentee ordering when using '

let writeStream = fs.createWriteStream(__dirname+'/myfile.txt',
{encoding:'utf-8',emitClose:true})

writeStream.write(data);

writeStream.on('finish',function () {
    console.log("done writing ")
})

writeStream.on('err',function () {
    console.log(err)
})

