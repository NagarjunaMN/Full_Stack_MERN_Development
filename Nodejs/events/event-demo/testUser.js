let User = require('./userList');
let usr = new User();
// let usr = new User.userList();

usr.on('save',function () {
    console.log('User stored in DB')
})

usr.save({name:'nagarjuna',gender:'Male'});
usr.all();