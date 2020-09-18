// Write a function `pairProduct(array, num)` that accepts an array of numbers (array) and a target number (num). It should return pairs of indices whose elements multiply to `num`. No pair should appear twice in the result.
function pairProduct(array, num){
  var pairs = [];
    for(var i = 0; i < array.length; i++){
      for(var j = i + 1; j < array.length; j++){
        if(array[i] * array[j] === num){
          pairs.push([i, j]);
        }
      }
    }
  return pairs;
}
console.log(pairProduct([1,2,3,4,5], 4));//[ [ 0, 3 ] ]
console.log(pairProduct([1,2,3,4,5], 8));//[ [ 1, 3 ] ]
console.log(pairProduct([1, 2, 3, 12, 8], 24));//[ [ 1, 3 ], [ 2, 4 ] ]
