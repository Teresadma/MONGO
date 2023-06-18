const mongoose = require ("mongoose");
let Mark = require("./marks");

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    marks: [Mark]
})

module.exports = mongoose.model("Students", studentSchema)