// Write a function `collapseString(string)` that takes in a string as an argument. The function should return a new string where 'streaks' of consecutive characters are collapsed to a single character.
// function collapseString(string){
//   var newString = "";
//     for(var i = 0; i < string.length; i++){
//       if(newString[newString.length - 1] !== string[i]){
//         newString += string[i];
//       }
//     }
//   return newString;
// }

function collapseString(string){
  var newString = [];
  var string = string.split("");
    for(var i = 0; i < string.length; i++){
      if(string[i] !== string[i + 1]){
        newString.push(string[i]);
      }
    }
  return newString.join("");
}
console.log(collapseString('apple'));//'aple'
console.log(collapseString('AAAaalviiiiin!!!'));//'Aalvin!'
console.log(collapseString('hello   app academy'));//'helo ap academy'
