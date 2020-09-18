// Write a function `doesKeyExist(object, key)` that takes in an object and a key it returns true if the key is inside the object and false if the key is not inside the object.
function doesKeyExist(object, key){
  // return object.hasOwnProperty(key);
  return object[key] !== undefined; 
}
var object1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
console.log(doesKeyExist(object1, 'course'));//true
console.log(doesKeyExist(object1, 'name'));//false
