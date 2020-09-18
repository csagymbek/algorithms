// We are going to complete a function that takes in two parameters an object and a key, and returns whether the object has a property at the given key. Your function should create an isPresent variable and assign it to a comparison between the object's value at the given key and undefined, and return the isPresent variable.
function isPropertyPresent(object, key) {
  // create an isPresent variable
  // assign it to a comparison between object's value at key and undefined
  // return the isPresent variable
  var isPresent = object[key] !== undefined;
  return isPresent;
}
var object2 = {
  'size': 'M',
  'color': 'green',
  'cut': 'tapered',
  'price': 30
};
var key2 = 'cut';
console.log(isPropertyPresent(object2, key2));//true
