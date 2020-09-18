// Write a function `minMaxDifference(array)` that returns the difference between the largest value and the smallest value in the array. Assume that the `array` is an array of numbers. Assume an array of at least two numbers.
function minMaxDifference(array){
  var min = array[0];
  var max = array[0];
    for(var i = 0; i < array.length; i++){
      if(array[i] > max){
        max = array[i];
      } else if(array[i] < min){
        min = array[i];
      }
    }
  return max - min;
}
console.log(minMaxDifference([1,2,3,4,5]));//4
console.log(minMaxDifference([5,4,3,2,1]));//4
console.log(minMaxDifference([4,2,5,1,-5]));//10
