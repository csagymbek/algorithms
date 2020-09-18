// Write a function objectToString(object) that takes in an object and returns a string representing the counts of each character in the object.
function objectToString(object){
  var string = "";
    for(var key in object){
      for(var i = 0; i < object[key]; i++){
        string += key;
      }
    }
  return string;
}
console.log(objectToString({a: 2, b: 4, c: 1}));//"aabbbbc"
console.log(objectToString({b: 1, o: 2, t: 1}));//"boot"
