const Photo = require("../model/photo");

function getPhoto(request, response){
    let usuario = request.body.usuario;
    let respuesta;
    Photo.find({usuario: usuario})
    .then((data) =>
    {
        if (data.length === 0){
            console.log("no se han encontrado fotos")
            respuesta = {
                error:true,
                codigo:200,
                mensaje:"Los datos son incorrectos",
                data_user: null}
        }else{
            console.log("Fotos encontradas: ", data);
            respuesta = {
                error:false,
                codigo:200,
                mensaje:"Los datos son correctos",
                data_user: data};
        }
        response.send(respuesta)
    })
    .catch((err) =>
    {
        console.log("Fotos no encontradas", err)
    });    
}

function postPhoto (request, response){
    let respuesta;
    let foto = new Photo ({
        usuario: request.body.usuario,
        url: request.body.url,
        titulo: request.body.titulo,
        descripcion: request.body.descripcion
    });
    foto.save()
        .then((data) =>
        {
            console.log("Usuario creado: ", data);
            respuesta = {
                error:false,
                codigo:200,
                mensaje:"Los datos son correctos",
                data: data};
            response.send(respuesta)           
        })
        .catch((err) =>
        {
            console.log(err)
        });    
}

function putPhoto (request,response){
    let respuesta;
    Photo.findOneAndUpdate({titulo: request.body.titulo},{descripcion: request.body.descripcion})
        .then((data) =>
        {
            console.log("Descripcion editada: ", data);
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: "Descripción editada correctamente",
                data: data};
            response.send(respuesta)
        })
        .catch((err) =>
        {
            console.log("Fallo en la edición", err)
        });
}

function deletePhoto (request,response){
    let respuesta;
    Photo.deleteOne({usuario: request.body.usuario, titulo: request.body.titulo})
        .then((data) =>
        {
            console.log("Foto eliminada: ", data);
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: "Foto eliminada correctamente",
                data: data};
            response.send(respuesta)
        })
        .catch((err) =>
        {
            console.log("Foto no encontrada: ", err)
        });
}

function deleteAll (request, response){
    let respuesta;
    Photo.deleteMany({usuario: request.body.usuario})
        .then((data) =>
        {
            console.log("Fotos eliminadas: ", data);
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: "Fotos eliminadas correctamente",
                data: data};
            response.send(respuesta)
        })
        .catch((err) =>
        {
            console.log("Fotos no encontradas", err)
        });
}

module.exports = {getPhoto, postPhoto, putPhoto, deletePhoto, deleteAll}