const mongoose = require ("mongoose");

const teacherSchema = new mongoose.Schema({
    teacher_first_name: String,
    teacher_last_name: String,
})

module.exports = mongoose.model("Teachers", teacherSchema)