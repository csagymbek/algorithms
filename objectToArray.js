Complete a function called convertObjectToArray which converts an object literal into an array of arrays.
function convertObjectToArray(obj) {
    var array = [];
        for(var key in obj){
            array.push([key, obj[key]]);
        }
    return array;
}
var input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
}
console.log(convertObjectToArray(input));
// var output = [['name', 'Holly'], ['age', 35], ['role', 'producer']]
