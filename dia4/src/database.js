let mongoose = require("mongoose");

mongoose.connect('mongodb+srv://teresademiguel:administrador@cluster0.smkxd8a.mongodb.net/APIPhotos',
                {useNewUrlParser: true,
                useUnifiedTopology: true})
.then((db) => {
    console.log("database connected on " + db.connection.host)
})
.catch((error) => {
    console.log(error)
})