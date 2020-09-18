// Write a function `pairZero(array)` that takes in an array of numbers as an argument and returns all pairs of numbers that sum to 0. Assume that all the numbers in the given array are unique. The function should return an array that contains pairs, a single pair is an array of length 2.
function pairZero(array){
  var pairs = [];
    for(var i = 0; i < array.length; i++){
      for(var j = i + 1; j < array.length; j++){
        if(array[i] + array[j] === 0){
          pairs.push([array[i], array[j]]);
        }
      }
    }
  return pairs;
}
console.log(pairZero([4, 1, 0]));//[]
console.log(pairZero([1, 2, -1]));//[ [ 1, -1 ] ]
console.log(pairZero([0, 2, 5, -2, 7, -7]));//[ [ 2, -2 ], [ 7, -7 ] ]
