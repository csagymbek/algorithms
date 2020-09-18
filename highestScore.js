// Write a function highestScore(students) that takes in an array of student objects as a parameter. It should return a string that corresponds to the student with the highest score. The string should contain that student's initials concatenated with their id. Assume the array contains at least 1 student object and the student with the highest score is unique (there are no ties).
function highestScore(students){
  var student = students[0];
    for(var i = 0; i < students.length; i++){
      if(students[i].score > student.score){
        student = students[i];
      }
    }
  var initials = student.name.split(" ");
  return initials[0][0] + initials[1][0] + student.id;
}
var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];
console.log(highestScore(students)); //=> 'TD2'
