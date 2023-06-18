const mongoose = require ("mongoose");
let Teacher = require("./teachers");

const subjectSchema = new mongoose.Schema({
    title: String,
    teacher: [Teacher],   
})

module.exports = mongoose.model("Subjects", subjectSchema)