const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const adicionaTurnoNoite = (obj, key, value) => obj[key] = value;
    adicionaTurnoNoite(lesson2, 'turno', lesson3.turno);

const keysInObj = (obj) => Object.keys(obj);
    keysInObj(lesson1);

const objSize = (obj) => Object.keys(obj).length;
    objSize(lesson2);

const valuesInObj = (obj) => Object.values(obj);
    valuesInObj(lesson3);

const newLesson1 = { lesson1 : lesson1 };
const newLesson2 = { lesson2 : lesson2 };
const newLesson3 = { lesson3 : lesson3 };
const allLessons = Object.assign(newLesson1, newLesson2, newLesson3);
console.log(allLessons);