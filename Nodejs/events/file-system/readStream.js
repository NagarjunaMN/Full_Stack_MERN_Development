const fs = require('fs');

let readstream = fs.createReadStream(__dirname+'/myfile.txt');

readstream.setEncoding('utf-8')

let data='';

readstream.on('data',function (chunk) {
    console.log(chunk)
    data += chunk;
    
});

readstream.on('error',function (err) {
    console.log(err)
});

readstream.on('end',function () {
    console.log('Reading success')
})