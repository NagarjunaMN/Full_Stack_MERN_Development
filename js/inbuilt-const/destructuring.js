
var obj={
name:"javascript",
gender:"Female",
age:23,
status:"who cares",
Math:20,
    Physics:30,
    Chem:23,
    "Basic Computers":66,
    "454":44,
    "if":true,
    hobbies:["watching TV","listening to Music"],
    highest_Education:{Degree:"B.E",Stream:"CS",Percentage:57.2,Passedout:2018},

    friends:[{
        name:"Rakesh",
        gender:"Male"
    },
    {
        name:"Raju",
        gender:"Male"
            }]
        }

        // let gender=obj.gender this is how we access the values
        // let hobbies=obj.hobbies

        //object destructuring
        let {gender,hobbies,age:myage}=obj; //it has the samething as above
        console.log(gender)
        console.log(hobbies)
        console.log(myage)


//math,phy,eng,history
let results=[35,6,45,34]

// let eng=results[2]
// let mat=results[0]

let [mat,,eng]=results//since it takes by index we give empty for 2nd element
console.log(mat)
console.log(eng)


