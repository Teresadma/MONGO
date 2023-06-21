const mongoose = require ("mongoose");

mongoose.connect('mongodb+srv://teresademiguel:administrador@cluster0.smkxd8a.mongodb.net/Codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false})

const teacherSchema = new mongoose.Schema({
    teacher_first_name: String,
    teacher_last_name: String,
})

const marksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String,
    teachers: [teacherSchema]
})

let TeacherModel = mongoose.model("Profesor", teacherSchema);
let MarksModel = mongoose.model("Notas", marksSchema);

// let teacher1 = new TeacherModel({teacher_first_name: "Sofia", teacher_last_name: "Angel"})
// let teacher2 = new TeacherModel({teacher_first_name: "Elena", teacher_last_name: "Gayo"})
// let teacher3 = new TeacherModel({teacher_first_name: "Teresa", teacher_last_name: "de Miguel"})
// let teacher4 = new TeacherModel({teacher_first_name: "Aitor", teacher_last_name: "Goyenechea"})
// let teacher5 = new TeacherModel({teacher_first_name: "Silvia", teacher_last_name: "Recarte"})
// let teacher6 = new TeacherModel({teacher_first_name: "Laura", teacher_last_name: "Calle"})
// let teacher7 = new TeacherModel({teacher_first_name: "Ines", teacher_last_name: "Muñoz"})
// let teacher8 = new TeacherModel({teacher_first_name: "Roberto", teacher_last_name: "Melero"})
// let teacher9 = new TeacherModel({teacher_first_name: "Alejandro", teacher_last_name: "Planelles"})
// let teacher10 = new TeacherModel({teacher_first_name: "Menchu", teacher_last_name: "Angel"})

// let mark1 = new MarksModel({date: "2022-06-23", mark: 8, student_first_name: "Lucia", student_last_name: "Lopez", group_name: "azul", subject_name: "Castellano", teachers: [teacher1, teacher2]})
// let mark2 = new MarksModel({date: "2022-06-23", mark: 8, student_first_name: "Jorge", student_last_name: "Lopez", group_name: "azul", subject_name: "Catalán", teachers: [teacher2, teacher3]})
// let mark3 = new MarksModel({date: "2022-06-23", mark: 8, student_first_name: "Maria", student_last_name: "García", group_name: "verde", subject_name: "Matemáticas", teachers: [teacher3, teacher4]})
// let mark4 = new MarksModel({date: "2022-06-23", mark: 8, student_first_name: "Jose", student_last_name: "Martinez", group_name: "lila", subject_name: "Castellano", teachers: [teacher4, teacher5]})
// let mark5 = new MarksModel({date: "2022-06-23", mark: 8, student_first_name: "Natalia", student_last_name: "Alberti", group_name: "amarillo", subject_name: "Catalán", teachers: [teacher5, teacher6]})
// let mark6 = new MarksModel({date: "2022-06-23", mark: 8, student_first_name: "Monica", student_last_name: "Carlon", group_name: "rojo", subject_name: "Matemáticas", teachers: [teacher7, teacher8]})
// let mark7 = new MarksModel({date: "2022-06-23", mark: 8, student_first_name: "Lucia", student_last_name: "Montoya", group_name: "amarillo", subject_name: "Castellano", teachers: [teacher9, teacher10]})
// let mark8 = new MarksModel({date: "2022-06-23", mark: 8, student_first_name: "Pedro", student_last_name: "Garau", group_name: "verde", subject_name: "Economía", teachers: [teacher10, teacher2]})
// let mark9 = new MarksModel({date: "2022-06-23", mark: 8, student_first_name: "Carmela", student_last_name: "de Mingo", group_name: "azul", subject_name: "Economía", teachers: [teacher9, teacher3]})
// let mark10 = new MarksModel({date: "2022-06-23", mark: 8, student_first_name: "Paula", student_last_name: "Martorell", group_name: "lila", subject_name: "Castellano", teachers: [teacher8, teacher4]})

// mark1.save()
// .then((result)=>{
//     console.log("Mark1 guardado");
//     return mark2.save()
// })
// .then((result)=>{
//     console.log("Mark2 guardado");
//     return mark3.save()
// })
// .then((result)=>{
//     console.log("Mark3 guardado");
//     return mark4.save()
// })
// .then((result)=>{
//     console.log("Mark4 guardado");
//     return mark5.save()
// })
// .then((result)=>{
//     console.log("Mark5 guardado");
//     return mark6.save()
// })
// .then((result)=>{
//     console.log("Mark6 guardado");
//     return mark7.save()
// })
// .then((result)=>{
//     console.log("Mark7 guardado");
//     return mark8.save()
// })
// .then((result)=>{
//     console.log("Mark9 guardado");
//     return mark10.save()
// })
// .then((result)=>{
//     console.log("Mark10 guardado");
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
//     console.log("Teacher5 guardado");
//     return teacher6.save()
// })
// .then((result)=>{
//     console.log("Teacher6 guardado");
//     return teacher7.save()
// })
// .then((result)=>{
//     console.log("Teacher10 guardado");
//     return teacher8.save()
// })
// .then((result)=>{
//     console.log("Teacher8 guardado");
//     return teacher9.save()
// })
// .then((result)=>{
//     console.log("Teacher9 guardado");
//     return teacher10.save()
// })
// .catch((error)=>{
//     console.log(error)
// })

function getAVG(asignatura) {
    try {
        MarksModel.aggregate([{$group: {"_id": asignatura, "Nota Media": {"$avg": "$mark"}}}])
        .then((result)=>{
            console.log(result)
        })
    } catch (error) {
        console.log(error);
    }
}

// getAVG("Castellano")

function getSUM() {
    try {
        MarksModel.aggregate([{$count:"Numero de Alumnos"}])
        .then((result)=>{
            console.log(result)
        })
    } catch (error) {
        console.log(error);
    }
}

// getSUM()

function getNameSurname(){
    MarksModel.aggregate([{$project: {    
                                    _id: 0,
                                    student_first_name: 1,
                                    student_last_name: 1,
                                    }
                        }])
    .then((result)=>{
        console.log(result)
    })
    .catch ((error) => {
        console.log(error)})
    
}


// getNameSurname()

function getTeachers(){
    TeacherModel.aggregate([{$project: {    
                                    _id: 0,
                                    teacher_first_name: 1,
                                    teacher_last_name:1
                                    }
                        }])
    .then((result)=>{
        console.log(result)
    })
    .catch ((error) => {
        console.log(error)})
    
}

// getTeachers()

function getAlumnos (){
    MarksModel.aggregate([{"$group": {"_id": "$group_name", "Cantidad": {"$sum": 1}}
                        },
                        {"$sort": {"_id": -1}}])
    .then((result)=>{
                console.log(result)
            })
    .catch ((error) => {
        console.log(error)})
}

// getAlumnos()

function getMedia (){
    MarksModel.aggregate([{$group: {_id: "$subject_name", "Nota Media": {$avg: "$mark"}}},
                                    {$match: {"Nota Media": {$gte: 7.5}}},
                                    {$sort: {"Nota Media": -1}},
                                    {$limit: 5}
                                ])
    .then((result)=>{
        console.log(result)
    })
    .catch ((error) => {
        console.log(error)})
}

// getMedia()
console.log("Holi")

function getProfesores() {
    MarksModel.aggregate([
      { $unwind: "$teachers" },
      {
        $group: {
          _id: "$subject_name",
          count: { $sum: 1 }
        }
      }
    ])
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
//   getProfesores();
  

function getName() {
    let lastYear = new Date().getFullYear() - 1;

        MarksModel.aggregate([{
                                $project: {
                                _id: 0,
                                student_first_name: 1,
                                student_last_name: 1,
                                mark: 1,
                                date: 1}},
            {$match: {$or: [{ mark: { $gt: 8 }},
                            { date: { $lt: new Date(lastYear, 0, 1)}}]}}
                            ])
    .then((result) => {
    console.log(result);
    })
    .catch((err) => {
    console.error("Error al obtener los alumnos", err);
    });
    }

// getName();

function getCurrentYear(){
    let inicio = new Date('2023-01-01');
    let fin = new Date('2023-12-31');
    MarksModel.aggregate([{
        $match: {date: { $gte: inicio, $lte: fin }}},
                {$group: {_id: "$subject_name", "La nota media es": { $avg: "$mark" }}}])
    .then((result)=>{
        console.log(result)
    })
    .catch ((error) => {
        console.log(error)})
}
getCurrentYear()

function getCurrentStudent(){
    let inicio = new Date('2023-01-01');
    let fin = new Date('2023-12-31');
    MarksModel.aggregate([{
        $match: {date: { $gte: inicio, $lte: fin }}},
                {$group: {_id: "$student_first_name", "La nota media es": { $avg: "$mark" }}}])
    .then((result)=>{
        console.log(result)
    })
    .catch ((error) => {
        console.log(error)})
}
// getCurrentStudent()

function getStudentSubject(profesor){
    MarksModel.aggregate([
                        {$unwind: "$teachers"},
                        {$match: {"teachers.teacher_first_name": profesor}},
                        {$group: {
                            _id: "$student_first_name",
                            CantidadSubjects: { $sum: 1 },
                          }},
                    {$project: {
                        _id: 0,
                        student_first_name: "$_id",
                        CantidadSubjects: 1
                    }}])
    .then((result)=>{
        console.log(result)
    })
    .catch ((error) => {
        console.log(error)})                
}
// getStudentSubject("Elena")


