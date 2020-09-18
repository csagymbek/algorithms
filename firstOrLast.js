// Write a function firstOrLast(array) that takes in an array and returns either:
// - the first element if there is an even number of elements in the array
// - the last element if there is an odd number of elemetns in the array
// You can assume the array contains at least one element.
function firstOrLast(array){
  for(var i = 0; i < array.length; i++){
    if(array.length % 2 === 0){
      return array[0];
    } else{
      return array[array.length - 1];
    }
  }
}
console.log(firstOrLast(['a', 'b', 'c', 'd']));//'a'
console.log(firstOrLast(['Jenny', 'Mary', 'Mark']));//'Mark'
