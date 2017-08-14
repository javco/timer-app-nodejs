var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tasksSchema = new Schema({
    name: String
});

mongoose.model('tasks', tasksSchema);
