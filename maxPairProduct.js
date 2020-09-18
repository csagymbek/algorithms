// Write a function `maxPairProduct(arr)` that takes in an array of numbers and returns the largest product of any pair of numbers from the array.
function maxPairProduct(arr){
  var max = 0;
    for(var i = 0; i < arr.length; i++){
      for(var j = i + 1; j < arr.length; j++){
        if((arr[i] * arr[j]) > max){
          max = arr[i] * arr[j];
        }
      }
    }
  return max;
}
console.log(maxPairProduct([5, 7, 6, 9, 3]));//63
console.log(maxPairProduct([4, 2, 5, 6]));//30
