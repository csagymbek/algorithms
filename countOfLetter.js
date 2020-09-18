// Write a function `countOfLetter(string, char)` that takes in a string and a character and returns the number of times that character appears in the string
function countOfLetter(string, char){
  var count = 0;
    for(var i = 0; i < string.length; i++){
      if(string[i].toLowerCase() === char){
        count++;
      }
    }
  return count;
}
console.log(countOfLetter('mississippi', 's'));//4
console.log(countOfLetter('MISSISSIPPI', 'p'));//2
console.log(countOfLetter('BOOTCAMP', 't'));//1
