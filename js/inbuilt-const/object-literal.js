let nam='nagarjuna';
let gender='male';
let age=23;

let obj={//shortcut
    nam,
    age,
    gender,
    desc(){
        console.log(this.nam)
    }
}
console.log(obj)
obj.desc()