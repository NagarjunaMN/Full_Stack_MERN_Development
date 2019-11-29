console.log(global)

// global.env holds where the node modules  are installed  
// we use the environment variable to store the seret values of our application
// when we are  building our website we are interacting with lot of 3rd party applications like paypal for transaction fb,twitter
// IN THIS CASE ITLL be available to the server only no one can hack it

// console.log(global.process)// we can direcly say process
// console.log(process) 
// it has title with default name node ,represents the process name diff procss has diff names
// we can change it also
// we can check version ,platform ,arc procssid
process.title = "my process"
// console.log(process)
console.log(process.platform)
console.log(process.pid)
// we can get current working directory
console.log(process.cwd())

// cpu usage that particular process how much cpu its using
console.log(process.cpuUsage())

// when we are about end(exit) this process fire this event or function
// process internally exits that time fire this event
process.on('exit',function () {
    console.log(" About to end this Proxess ")
})
// if any exception occurs in code it fires this below event ,we can handle exception globally
process.on('uncaughtException',function () {
    console.log("exception something went wrong")
})

// to know the directory
console.log("directoryname",__dirname)

// to know the filename
console.log("filename",__filename)

// module-> for that file it creates some object called as module
console.log(module)

// time functions 

