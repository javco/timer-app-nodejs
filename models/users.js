var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    name: String
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
