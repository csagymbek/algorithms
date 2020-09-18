// Write a function arrayRange(min, max, step) that takes in 3 numbers as parameters. The function should return an array containing all numbers between `min` and `max` at `step` intervals.
function arrayRange(min, max, step){
  var array = [];
    for(var i = min; i <= max; i += step){
      array.push(i);
    }
  return array;
}
console.log(arrayRange(0, 12, 2));//[ 0, 2, 4, 6, 8, 10, 12 ]
console.log(arrayRange(2, 5, 1));//[ 2, 3, 4, 5 ]
console.log(arrayRange(100, 20, 3));//[]
9
