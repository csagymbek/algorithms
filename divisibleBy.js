// Write a function divisibleByFivePairSum(array), that takes an array of numbers. It should return an array of all the pairs of indices whose sum is a multiple of five.
function divisibleByFivePairSum(array){
  var newArray = [];
    for(var i = 0; i < array.length; i++){
      for(var j = i + 1; j < array.length; j++){
        if((array[i] + array[j]) % 5 === 0){
          newArray.push([i , j]);
        }
      }
    }
  return newArray;
}
console.log(divisibleByFivePairSum([1, 5, 2, 0, 4]));//[ [ 0, 4 ], [ 1, 3 ] ]
console.log(divisibleByFivePairSum([13, 22, 8, -3, 12]));//[[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]
