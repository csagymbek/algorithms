// Write a function `objectSize(object)` that takes in an object and returns the number of key-value pairs in the object.
function objectSize(object){
  var count = 0;
    for(var key in object){
      if(object[key] !== undefined){
        count++;
      }
    }
  return count;
}
var obj1 = {
  name: 'Fido',
  age: '4'
};
console.log(objectSize(obj1));//2
var obj2 = {
  name: 'App Academy',
  course: 'Bootcamp Prep',
  locations: ['SF', 'NY']
};
console.log(objectSize(obj2));//3
