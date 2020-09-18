// Write a function elementCount(array) that returns an object. Each key corresponds to an element in the array and the value corresponds to how many times that element appears in the array.
function elementCount(array){
  var object = {};
    for(var i = 0; i < array.length; i++){
      if(object[array[i]] === undefined){
        object[array[i]] = 1;
      } else{
        object[array[i]]++;
      }
    }
  return object;
}
console.log(elementCount(["a", "a", "b", "b"]));//{ "a" : 2, "b" : 2 }
console.log(elementCount(['c', 'a', 'c', 'a', 'b']));//{"c": 2, "a": 2, "b": 1}
