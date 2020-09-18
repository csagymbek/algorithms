// Write a function `adults(people)` that takes in an array of person objects. The function should return an array containing the names of those who have an age of 18 or higher.
function adults(people){
  var array = [];
    for(var i = 0; i < people.length; i++){
      if(people[i].age >= 18){
        array.push(people[i].name);
      }
    }
  return array;
}
var people = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];
console.log(adults(people));//[ 'John', 'Jane' ]
