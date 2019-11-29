const http = require('http');

http.createServer(function (req,res) {
    res.end('hello world')
}).listen(3000, function () {
    console.log('server up running on port 3000')
})

//listen specifies which port it runs on 