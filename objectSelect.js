// Write a function objectSelect(object, callback) which takes as arguments an object and a callback, and returns a new object where all the key value pairs return true, when passed into the callback.
function objectSelect(object, callback){
  var newObject = {};
    for(var key in object){
      if(callback(key, object[key])){
        newObject[key] = object[key];
      }
    }
  return newObject;
}

function isEqual(a, b){
  return a === b;
}
var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};
console.log(objectSelect(obj, isEqual));
// {
//  one: "one",
// three: "three"
// }
