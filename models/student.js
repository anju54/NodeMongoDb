const mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
    id : Number,
    name : String,
    age : Number
})

var studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;