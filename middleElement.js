// Write a function middleElement(array) that takes in an array of elements and returns the element in the middle of the array if the array contains an odd number elements. If the array contains an even number of elements, the function should return the middle two elements in an array.
function middleElement(array){
  if(array.length % 2 === 0){
    return [array[array.length / 2 - 1], array[array.length / 2]];
  } else{
    return array[Math.floor(array.length / 2)];
  }
}
console.log(middleElement([1, 2, 3, 4, 5]));//3
console.log(middleElement(["a", "b", "c", "d", "e", "f"]));//["c", "d"]
