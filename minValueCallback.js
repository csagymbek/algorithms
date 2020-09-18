// Write a funtion minValueCallback(array, cb) that takes in an array of numbers and a callback. The function should call `cb` and pass inside the cb the minimum number of the given array. `minValueCallback` should return the return value of `cb`. If the array is empty, then pass `null` into `cb`.
function minValueCallback(array, cb){
  var min = null;
    for(var i = 0; i < array.length; i++){
      if(min === null || array[i] < min){
        min = array[i];
      }
    }
  return cb(min);
}
var array1 = [-2, -7, 0, 8];
console.log(minValueCallback(array1, Math.abs));//7

function double(n){
  return n * 2
}
var array2 = [12, 9, 20, 13, 14];
console.log(minValueCallback(array2, double));//18
