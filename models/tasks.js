var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tasksSchema = new Schema({
    name: String
});

var Task = module.exports = mongoose.model('Task', tasksSchema);

// get Tasks
module.exports.getTasks = function(callback, limit){
    Task.find(callback).limit(limit);
}

// get single Task
module.exports.getTaskById = function(id, callback){
    Task.findById(id, callback);
}
