// Write a function `avgValue(array)` that takes in an array of numbers and
// returns the average number.
function avgValue(array){
  var sum = 0;
    for(var i = 0; i < array.length; i++){
      sum += array[i];
    }
  return sum / array.length;
}
console.log(avgValue([10, 20]));//15
console.log(avgValue([2, 3, 7]));//4
console.log(avgValue([100, 60, 64]));//74.66666666666667
