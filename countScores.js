// Write a function `countScores(people)` that takes in an array of score objects (people) as its input. A score object has two key-value pairs: a name (string) and a score (number). `countScores(people)` should return an object that has key-value pairs where each name is a key and the value is their total score.
function countScores(people){
  var object = {};
    for(var i = 0; i < people.length; i++){
      if(object[people[i].name] === undefined){
        object[people[i].name] = people[i].score;
      } else{
        object[people[i].name] += people[i].score;
      }
    }
  return object;
}
var ppl = [ {name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];
console.log(countScores(ppl));//{ Anthony: 2, Fred: 10, Winnie: 12 }
var peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps));//{ Anthony: 4, Winnie: 6, Fred: 4 }
