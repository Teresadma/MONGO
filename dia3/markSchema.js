const mongoose = require ("mongoose");
let TeacherModel = require("./teacherSchema");


const marksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: Number,
    subject_name: String,
    teachers: [TeacherModel]
})

module.exports = mongoose.model("Marks", marksSchema)