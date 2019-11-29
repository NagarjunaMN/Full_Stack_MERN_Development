let today=new Date();
console.log(today)

//getter and setter moment.js in internet has lot of these things
console.log(today.getDate())
console.log(today.getMonth())//month couunt starts from 0(january) 
console.log(today.getFullYear())
console.log(today.getMinutes())
console.log(today.getHours())
console.log(today.getTime())
console.log('\n')


console.log(new Date(today.setDate(15)))
//setyear
//setmonth
//setminutes
//sethours

//we can pass date too

console.log(new Date('10/24/2019'))

//epoc timing the date gets calculateed from 1970
console.log(new Date(0)) //get time() value claculated from 1970
