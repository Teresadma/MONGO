let mongoose = require("mongoose");
let Student = require("./students");
let Mark = require("./marks");
let Subject =require("./subjects");
let Teacher = require("./teachers");

mongoose.connect('mongodb+srv://teresademiguel:administrador@cluster0.smkxd8a.mongodb.net/Colegio',
                {useNewUrlParser: false, useUnifiedTopology: false})

let estudiante1 = new Student()
function uploadStudent (firstName, lastName, marks) {
    let student = new Student ({
        firstName: firstName,
        lastName: lastName,
        marks: [marks]
    });
    student.save()
        .then((data) =>
        {
            console.log("Estudiante creado: ", data);
        })
        .catch((err) =>
        {
            console.log(err)
        });
}
uploadStudent("Roberto","Gayo")

function uploadMarks (date, mark, subject) {
    let nota = new Mark ({
        date: date,
        mark: mark,
        subject: subject
    });
    nota.save()
        .then((data) =>
        {
            console.log("Nota creada: ", data);
        })
        .catch((err) =>
        {
            console.log(err)
        });
}

// uploadMarks('2022-06-23',7)

function uploadSubject (title, teachers) {
    let asignatura = new Subject ({
        title: title,
        teachers: teachers
    });
    asignatura.save()
        .then((data) =>
        {
            console.log("Asignatura creada: ", data);
        })
        .catch((err) =>
        {
            console.log(err)
        });
}

uploadSubject("Física")

function uploadTeacher (firstName, lastName, groups) {
    let profesor = new Teacher ({
        firstName: firstName,
        lastName: lastName,
        groups:groups
    });
    profesor.save()
        .then((data) =>
        {
            console.log("Profesor creada: ", data);
        })
        .catch((err) =>
        {
            console.log(err)
        });
}

uploadTeacher("Sofia", "Ángel", ["2C","3C"])

// getStudentMarks(firstName, lastName) {
//     Student.findOne({firstName: firstName, lastName: lastName})
//       .exec((err, student) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
  
//         if (!student) {
//           console.log('No se encontró el estudiante.');
//           return;
//         }
  
//         Mark.find({ student: student })
//           .exec((err, marks) => {
//             if (err) {
//               console.log(err);
//               return;
//             }
  
//             if (marks.length === 0) {
//               console.log('No se encontraron notas para el estudiante.');
//               return;
//             }
  
//             console.log(`Notas para el estudiante: ${firstName} ${lastName}`);
//             marks.forEach(mark => {
//               console.log(`Fecha: ${mark.date}, Nota: ${mark.mark}`);
//             });
//           });
//       });
//   }
  
  // Llama a la función pasando el nombre y apellido del estudiante
//   getStudentMarks('Roberto','Gayo');
