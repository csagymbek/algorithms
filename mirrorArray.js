// Write a function `mirrorArray(array)` that takes in an array as an
// argument and returns a new array "mirrored" as shown in the examples:
function mirrorArray(array){
  var mirrored = [];
    for(var i = 0; i < array.length; i++){
      mirrored.push(array[i]);
    }
    for(var j = array.length - 1; j >= 0; j--){
      mirrored.push(array[j]);
    }
  return mirrored;
}
console.log(mirrorArray([1,2,3]));//[ 1, 2, 3, 3, 2, 1 ]
console.log(mirrorArray(['a', 'b', 'c', 'd']));//[ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
