// Write a function `arrayBuilder(object)` that takes in an object and returns an array filled with the appropriate number of elements. The order of the elements in the array does not matter, but repeated elements should be grouped.
function arrayBuilder(object){
  var array = [];
    for(var key in object){
      for(var i = 0; i < object[key]; i++){
        array.push(key);
      }
    }
  return array;
}
console.log(arrayBuilder({'cats': 2, 'dogs': 1}));//['cats', 'cats', 'dogs']
console.log(arrayBuilder({}));//[]
