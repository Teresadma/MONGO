let mongoose = require("mongoose");

mongoose.connect('mongodb+srv://teresademiguel:administrador@cluster0.smkxd8a.mongodb.net/Colegio',
                {useNewUrlParser: false, useUnifiedTopology: false})


const teacherSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [String]
})

const subjectSchema = new mongoose.Schema({
    title: String,
    teacher: [teacherSchema],   
})

const marksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    subject: subjectSchema
})

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    marks: [marksSchema]
})

let StudentModel = mongoose.model("Estudiante", studentSchema);
let MarkModel = mongoose.model("Notas", marksSchema);
let SubjectModel = mongoose.model("Asignatura", subjectSchema)
let TeacherModel = mongoose.model("Profesor", teacherSchema);

// let teacher1 = new TeacherModel({firstName: "Pepe", lastaName: "Jiménez", groups: ["1A","1B","1C"]})
// let teacher2 = new TeacherModel({firstName: "Mayte", lastaName: "Albertí", groups: ["2A","2B","2C"]})
// let teacher3 = new TeacherModel({firstName: "Lucia", lastaName: "López", groups: ["3A","3B","3C"]})
// let teacher4 = new TeacherModel({firstName: "Nano", lastaName: "Casellas", groups: ["4A","4B","4C"]})

// let subject1 = new SubjectModel({title: "Castellano", teacher: [teacher1, teacher2]})
// let subject2 = new SubjectModel({title: "Biología", teacher: [teacher2, teacher3]})
// let subject3 = new SubjectModel({title: "Física", teacher: [teacher3, teacher4]})
// let subject4 = new SubjectModel({title: "Química", teacher: [teacher1]})
// let subject5 = new SubjectModel({title: "Matemáticas", teacher: [teacher4]})

// let notas1 = new MarkModel({date: '2022-06-23', mark: 8, subject: subject1})
// let notas2 = new MarkModel({date: '2022-06-23', mark: 6, subject: subject2})
// let notas3 = new MarkModel({date: '2022-06-23', mark: 3, subject: subject3})
// let notas4 = new MarkModel({date: '2022-06-23', mark: 9, subject: subject4})
// let notas5 = new MarkModel({date: '2022-06-23', mark: 5, subject: subject5})

// let estudiante1 = new StudentModel({firstName: "Elena", lastName: "Gayo", marks: [notas1, notas2]})
// let estudiante2 = new StudentModel({firstName: "Sofia", lastName: "Angel", marks: [notas3]})
// let estudiante3 = new StudentModel({firstName: "Clara", lastName: "Montoro", marks: [notas4]})
// let estudiante4 = new StudentModel({firstName: "Teresa", lastName: "de Miguel", marks: [notas5]})

// estudiante1.save()
// .then((result)=>{
//     console.log("Estudiante1 guardado");
//     return estudiante2.save()
// })
// .then((result)=>{
//     console.log("Estudiante2 guardado");
//     return estudiante3.save()
// })
// .then((result)=>{
//     console.log("Estudiante3 guardado");
//     return estudiante4.save()
// })
// .then((result)=>{
//     console.log("Estudiante4 guardado");
//     return teacher1.save()
// })
// .then((result)=>{
//     console.log("Teacher1 guardado");
//     return teacher2.save()
// })
// .then((result)=>{
//     console.log("Teacher2 guardado");
//     return teacher3.save()
// })
// .then((result)=>{
//     console.log("Teacher3 guardado");
//     return teacher4.save()
// })
// .then((result)=>{
//     console.log("Teacher4 guardado");
//     return subject1.save()
// })
// .then((result)=>{
//     console.log("Subject1 guardado");
//     return subject2.save()
// })
// .then((result)=>{
//     console.log("Subject2 guardado");
//     return subject3.save()
// })
// .then((result)=>{
//     console.log("Subject3 guardado");
//     return subject4.save()
// })
// .then((result)=>{
//     console.log("Subject4 guardado");
//     return subject5.save()
// })
// .then((result)=>{
//     console.log("Subject5 guardado");
//     return notas1.save()
// })
// .then((result)=>{
//     console.log("Notas1 guardado");
//     return notas2.save()
// })
// .then((result)=>{
//     console.log("Notas2 guardado");
//     return notas3.save()
// })
// .then((result)=>{
//     console.log("Notas3 guardado");
//     return notas4.save()
// })
// .then((result)=>{
//     console.log("Notas4 guardado");
//     return notas5.save()
// })
// .catch((error)=>{
//     console.log(error)
// })
async function getMarks(fisrtName, lastName) {
    try {
        let estudiante = await StudentModel.findOne({ firstName: fisrtName, lastName: lastName });
        estudiante.marks.map((nota) => {
            return {
                date: nota.date,
                mark: nota.mark
            };
        });
    } catch (error) {
        console.log(error);
    }
}

getMarks("Elena","Gayo")
.then((marks) => {
    console.log('Notas:', marks);
})
.catch((error) => {
    console.log(error);
});

async function getSubjects(fisrtName, lastName) {
    try {
        let estudiante = await StudentModel.findOne({ firstName: fisrtName, lastName: lastName });
        let asignaturas = [];
        estudiante.marks.forEach((nota) => {
            if (nota.subject) {
              asignaturas.push(nota.subject.title);
            }
          });    
          return asignaturas;
    } catch (error) {
        console.log(error);
    }
}
getSubjects("Elena","Gayo")
.then((subjects) => {
    console.log('Asignaturas:', subjects);
})
.catch((error) => {
    console.log(error);
});

async function getTeachers(fisrtName, lastName) {
    try {
        let estudiante = await StudentModel.findOne({ firstName: fisrtName, lastName: lastName });
        let profesores = [];
        estudiante.marks.forEach((nota) => {
            if (nota.subject) {
                nota.subject.teacher.forEach((profesor) => {
                    profesores.push({
                      firstName: profesor.firstName,
                    });
                });
            }
          });    
          return profesores;
    } catch (error) {
        console.log(error);
    }
}

getTeachers("Elena","Gayo")
.then((teachers) => {
    console.log('Profesores:', teachers);
})
.catch((error) => {
    console.log(error);
});

  




