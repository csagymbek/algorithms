// Write a function firstAndLast(array) that takes in an array of numbers and returns either:
// - the sum of the first and last elements of the array if there is an even number of elements
// - the difference between the first and last elements of the array if there is an odd number of elements.
 // You can assume the array contains at least one number.
function firstAndLast(array){
  for(var i = 0; i < array.length; i++){
    if(array.length % 2 === 0){
      return array[0] + array[array.length - 1];
    } else{
      return array[0] - array[array.length - 1];
    }
  }
}
console.log(firstAndLast([1, 2, 3, 4]));//5
console.log(firstAndLast([1, 2, 3, 4, 5]));//-4
console.log(firstAndLast([12, 5]));//17
console.log(firstAndLast([12]));//0
console.log(firstAndLast([7, 11, 3]));//4
