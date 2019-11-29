let EventEmitter = require('events').EventEmitter;
let util = require('util');

// emit we useif we are using or making our own events
let db = {
    users:[
        {name:'js',gender:'Female'},
        {name:'javascript',gender:'Female'}
    ]
}

function userList() {
    EventEmitter.call(this)
}

util.inherits(userList, EventEmitter);


userList.prototype.save = function (userObj) {
    console.log('saving User');
    db.users.push(userObj)
    this.emit('save')
}

userList.prototype.all = function () {
    console.log('Users List');
    console.log(db.users)
    return db.users;
}

module.exports = userList;
