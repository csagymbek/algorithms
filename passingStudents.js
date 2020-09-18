// Write a function passingStudents(students) that accepts an array of student objects. It should iterate through the list of students and return an array of names of all the students who have an average grade of at least 70.
function averageGrade(student){
  var sum = 0;
    for(var i = 0; i < student.length; i++){
      sum += student[i].score;
    }
  return sum / student.length;
}

function passingStudents(students){
  var names = [];
    for(var i = 0; i < students.length; i++){
      if(averageGrade(students[i].grades) >= 70){
        names.push(students[i].name);
      }
    }
  return names;
}
var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];
console.log(passingStudents(students));//[ 'Kush', 'Ned' ]
