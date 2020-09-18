// Write a function hasSymmetry(array) that takes in an array. The function should return true if the array has symmetry, false otherwise. For an array to have symmetry, it should be the same forwards and backwards.
function hasSymmetry(array){
  for(var i = 0; i < array.length; i++){
    if(array[i] !== array[array.length - 1 - i]){
      return false;
    }
  }
  return true;
}
console.log(hasSymmetry([1, 2, 3, 3, 2, 1]));//true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1]));//false
console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']));//true
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']));//false
