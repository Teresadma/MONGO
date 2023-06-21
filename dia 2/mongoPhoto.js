let mongoose = require("mongoose");
const Photo = require("./photo");

mongoose.connect('mongodb+srv://teresademiguel:administrador@cluster0.smkxd8a.mongodb.net/Codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false})

function uploadPhoto (usuario, url, titulo, descripcion) {
    let foto = new Photo ({
        usuario: usuario,
        url: url,
        titulo: titulo,
        descripcion: descripcion
    });
    foto.save()
        .then((data) =>
        {
            console.log("Usuario creado: ", data);
        })
        .catch((err) =>
        {
            console.log(err)
        });
}
// uploadPhoto("Jose","/assets/img/perrito.png","perro","gatito")

function findPhotosUser(usuario){
    Photo.find({usuario: usuario})
    .then((data) =>
    {
        console.log("Fotos encontradas: ", data);
    })
    .catch((err) =>
    {
        console.log("Fotos no encontradas", err)
    });
}

// findPhotosUser("Jose")

function updatePhoto(titulo, descripcion, nuevaDescripcion){
    Photo.updateOne({descripcion: nuevaDescripcion})
        .then((data) =>
        {
            console.log("Descripcion editada: ", data);
        })
        .catch((err) =>
        {
            console.log("Fallo en la edición", err)
        });
}
// updatePhoto("perro","gatito","perrito blanquito")

function deletePhoto(usuario,titulo){
    Photo.deleteOne({usuario: usuario, titulo:titulo})
        .then((data) =>
        {
            console.log("Foto eliminada: ", data);
        })
        .catch((err) =>
        {
            console.log("Foto no encontrada: ", err)
        });
}
// deletePhoto("Jose","gato")

function deleteAll(usuario){
    Photo.deleteMany({usuario:usuario})
        .then((data) =>
        {
            console.log("Fotos eliminadas: ", data);
        })
        .catch((err) =>
        {
            console.log("Fotos no encontradas", err)
        });
}
deleteAll("Jose")