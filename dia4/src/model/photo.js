const {Schema, model} = require("mongoose");

const photoSchema = new Schema(
    {
        usuario: String,
        url: String,
        titulo: String,
        descripcion: String
    }
)

module.exports = model("Photo", photoSchema, "photo")