// Write a function myIndexOf(array, ele) that takes an array and an element. Return the index of the element in the array, or -1 if it doesn't exist. Assume the `ele` will be a primitive data type (no arrays or objects).
function myIndexOf(array, ele){
  for(var i = 0; i < array.length; i++){
    if(array[i] === ele){
      return i;
    }
  }
  return -1;
}
console.log(myIndexOf([1,2,3,4,5], 5));//4
console.log(myIndexOf(["a", "b", "c"], "a"));//0
console.log(myIndexOf(["a", "b", "c"], "d"));//-1
