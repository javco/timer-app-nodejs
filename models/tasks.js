var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tasksSchema = new Schema({
    name: String
}, {
    versionKey: false
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

// add new Task
module.exports.addTask = function(task, callback){
    Task.create(task, callback);
}
