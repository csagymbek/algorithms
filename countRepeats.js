// Write a function `countRepeats(string)` that takes in a string and returns the number of letters that appear more than once in the string. You may assume the string contains only lowercase letters. Count the number of letters that repeat, not the number of times they repeat in the string.
function countRepeats(string){
  var count = 0;
  var object = {};
    for(var i = 0; i < string.length; i++){
      if(object[string[i]] === undefined){
        object[string[i]] = 1;
      } else{
        object[string[i]]++;
      }
    }
    for(var key in object){
      if(object[key] > 1){
        count++;
      }
    }
  return count;
}
console.log(countRepeats('alvin'));//0
console.log(countRepeats('aaaalvin'));//1
console.log(countRepeats('pops'));//1
console.log(countRepeats('mississippi'));//3
console.log(countRepeats('hellobootcampprep'));//4
