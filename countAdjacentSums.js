// Write a function `countAdjacentSums(array, number)` that takes an array and a number. It should count the number of times that two adjacent numbers in an array sum up to number.
function countAdjacentSums(array, number){
  var count = 0;
    for(var i = 0; i < array.length - 1; i++){
      if(array[i] + array[i + 1] === number){
        count++;
      }
    }
  return count;
}
console.log(countAdjacentSums([1, 5, 1], 6));//2
console.log(countAdjacentSums([7, 2, 4, 6], 7));//0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13));//3
