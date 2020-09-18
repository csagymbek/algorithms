// Write a function isElement(array, ele) that takes an array and an element. The function should return true if the element is found inside of the array, it should return false otherwise. Do not use `indexOf()` method.
function isElement(array, ele){
  for(var i = 0; i < array.length; i++){
    if(array[i] === ele){
      return true;
    }
  }
  return false;
}
console.log(isElement([1,2,3,4,5], 5));//true
console.log(isElement(["a", "b", "c"], "a"));//true
console.log(isElement(["a", "b", "c"], "d"));//false
