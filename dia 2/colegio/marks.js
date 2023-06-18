const mongoose = require ("mongoose");
let Subject =require("./subjects");

const marksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    subject: Subject
})

module.exports = mongoose.model("Marks", marksSchema)