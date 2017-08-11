var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var timesSchema = new Schema({
    start: String,
    end: String,
    user: String,
});

mongoose.model('times', timesSchema);