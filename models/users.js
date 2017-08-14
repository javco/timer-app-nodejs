var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    name: String
}, {
    versionKey: false
});

mongoose.model('users', usersSchema);

var User = module.exports = mongoose.model('User', usersSchema);

// get Users
module.exports.getUsers = function(callback, limit){
    User.find(callback).limit(limit);
}

// get single User
module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

// add new User
module.exports.addUser = function(user, callback){
    User.create(user, callback);
}

// update User
module.exports.updateUser = function(id, user, options, callback){
    var query = {_id: id};
    var update = {
        name: user.name
    }
    User.findOneAndUpdate(query, update, options, callback);
}

// delete User
module.exports.deleteUser = function(id, callback){
    var query = {_id: id};
    User.remove(query, callback);
}