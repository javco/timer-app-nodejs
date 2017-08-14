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

mongoose.model('times', timesSchema);
