// Write a function `additionSequence(array, seq)` that takes in an array of numbers and a sequence of numbers. The function should return a new array where numbers of the original array are added to the numbers in the sequence. See the following example.

// array = [3, 2, 5, 4, 2, 1, 10];
// sequence = [2, 4, 6];
//
// array:    3 2  5 4 2 1 10
// sequence: 2 4  6 2 4 6  2
// result:   5 6 11 6 6 7 12

function additionSequence(array, seq){
  var newArray = [];
    for(var i = 0; i < array.length; i++){
      newArray.push(array[i] + seq[i % seq.length]);
    }
  return newArray;
}
var arr = [3, 2, 5, 4, 2, 1, 10];
var seq = [2, 4, 6];
console.log(additionSequence(arr, seq));//[ 5, 6, 11, 6, 6, 7, 12 ]
