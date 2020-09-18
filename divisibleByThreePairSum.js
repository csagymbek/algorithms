// Write a function `divisibleByThreePairSum(array)` that takes an array of numbers. It should return an array of all the pairs of indices, whose elements sum to a multiple of three.
function divisibleByThreePairSum(array){
  var anArray = [];
for(var i = 0; i < array.length; i++){
  for(var j = i + 1; j < array.length; j++){
    if((array[i] + array[j]) % 3 === 0){
      anArray.push([i, j]);
    };
  };
};
  return anArray;
};
console.log(divisibleByThreePairSum([1, 6, 3, 4, 2, 0]));//[[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
console.log(divisibleByThreePairSum([8, 3, 5, 9, 2]));//[[1, 3]]
