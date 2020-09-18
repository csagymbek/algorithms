// Write a function magicCipher(string, object) that takes in a string and an object. The function should return a new string where every character is replaced with its corresponding value in the object. If the character doesn't exist in the object, use the character.
function magicCipher(string, object){
  var newString = "";
    for(var i = 0; i < string.length; i++){
      if(object[string[i]] !== undefined){
        newString += object[string[i]];
      } else{
        newString += string[i];
      }
    }
  return newString;
}
console.log(magicCipher("add me on facebook" , { a : "c", d : "q"}));//"cqq me on fccebook"
console.log(magicCipher("where are you?" , { v : "l", '?' : "!"}));//"where are you!"
console.log(magicCipher("twmce" , { m : "n", t : "d", w : "a"}));//"dance"
