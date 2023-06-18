let mongoose = require("mongoose");
let User = require("./users");
let Profile = require("./profile");
let Credentials = require("./credentials");


mongoose.connect('mongodb+srv://teresademiguel:administrador@cluster0.smkxd8a.mongodb.net/Codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false})

// let userDocument = new User ({
//     login: "unicornio",
//     password: "Hola1234"

// });

// let profileDocument = new Profile ({
//     name: "Jorge",
//     surname: "Lopez",
//     dateOfBirt: 1997,
//     comments: "Puta",
//     rol: "Putax2"
// });

let credentialsDocument = new Credentials ({
    address: "Calle tonto el que lo lea",
    phone: 123456789,
    email: "tonto@gmail.com"
})

// userDocument.save()
// .then((data) =>
// {
//     console.log(data);
// })
// .catch((err) =>
// {
//     console.log(err)
// });

// profileDocument.save()
// .then((data) =>
// {
//     console.log(data);
// })
// .catch((err) =>
// {
//     console.log(err)
// });

credentialsDocument.save()
.then((data) =>
{
    console.log(data);
})
.catch((err) =>
{
    console.log(err)
});


