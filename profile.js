const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ["Lucia", "Jorge", "Flor"]
    },
    surname: String,
    dateOfBirth: Number,
    comments: String,
    rol:String
})

ProfileSchema.pre('save',function(next){
    console.log("Middleware de entrada");
    if (this.surname != "Gayo")
    {
        console.log("Has introducido un apellido correcto")
        next();
    }
    else
        console.log("Puta")
});

module.exports = mongoose.model("Profile", ProfileSchema)
