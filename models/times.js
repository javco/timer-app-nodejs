var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var timesSchema = new Schema({
    start: Date,
    end: Date,
    user: {
        type: Schema.ObjectId,
        ref: 'users',
    }
});

var Time = module.exports = mongoose.model('Time', timesSchema);

// get Times
module.exports.getTimes = function(callback, limit){
    Time.find(callback).limit(limit);
}

// get single Time
module.exports.getTimeById = function(id, callback){
    Time.findById(id, callback);
}

