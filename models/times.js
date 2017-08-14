var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var timesSchema = new Schema({
    active: {
        type: Boolean,
        default: false,
    },
    start: Date,
    end: Date,
    user: {
        type: Schema.ObjectId,
        ref: 'users',
    }
}, {
    versionKey: false
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

// add new Time
module.exports.addTime = function(time, callback){
    Time.create(time, callback);
}

// update Time
module.exports.updateTime = function(id, time, options, callback){
    var query = {_id: id};
    var update = {
        start: time.start,
        end: time.end,
        user: time.user
    }
    Time.findOneAndUpdate(query, update, options, callback);
}

// delete Time
module.exports.deleteTime = function(id, callback){
    var query = {_id: id};
    Time.remove(query, callback);
}

// New time START
module.exports.newTimerStart = function(userId, callback){
    var time = {
        active: true,
        start: new Date(),
        user: userId
    }
    Time.create(time, callback);
}
// New time STOP
module.exports.newTimerStop = function(id, options, callback){
    var query = {_id: id};
    var update = {
        active: false,
        end: new Date()
    }
    Time.findOneAndUpdate(query, update, options, callback);
}

