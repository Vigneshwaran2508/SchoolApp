var mongoose = require('mongoose')

var Schema = mongoose.Schema;


var u = new Schema({
    name: String,
    age:String,
    std:String
});
module.exports = mongoose.model('student', u);

