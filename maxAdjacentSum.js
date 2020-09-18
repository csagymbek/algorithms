// Write a function `maxAdjacentSum(array)` that takes in an array of numbers and returns the maximum sum of adjacent numbers in the array.First think how we can find adjacent elements in an array!
function maxAdjacentSum(array){
  var max = 0;
    for(var i = 0; i < array.length; i++){
      if((array[i] + array[i + 1]) > max){
        max = array[i] + array[i + 1];
      }
    }
  return max;
}
var arr1 = [5, 6, 11, 3];
var arr2 = [3, 2, 13, 5, 4, 7];
console.log(maxAdjacentSum(arr1)); // 17
console.log(maxAdjacentSum(arr2)); // 18
