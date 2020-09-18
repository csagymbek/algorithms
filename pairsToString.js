// Write a function `pairsToString(array)` that takes in an array of pairs. The function should return a string corresponding to the pairs.
function pairsToString(array){
  var string = "";
    for(var i = 0; i < array.length; i++){
      for(var j = 0; j < array[i][1]; j++){
        string += array[i][0];
      }
    }
  return string;
}
var array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];
console.log(pairsToString(array1));//'aaabcc'
var array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];
console.log(pairsToString(array2));//'food!'
