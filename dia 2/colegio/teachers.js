const mongoose = require ("mongoose");

const teacherSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [String]
})

module.exports = mongoose.model("Teachers", teacherSchema)