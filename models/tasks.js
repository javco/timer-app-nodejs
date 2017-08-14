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

// update Task
module.exports.updateTask = function(id, task, options, callback){
    var query = {_id: id};
    var update = {
        name: task.name
    }
    Task.findOneAndUpdate(query, update, options, callback);
}

// delete Task
module.exports.deleteTask = function(id, callback){
    var query = {_id: id};
    Task.remove(query, callback);
}