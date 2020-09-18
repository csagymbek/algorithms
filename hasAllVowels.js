// Write a function `hasAllVowels(string)` that takes in a string and returns true if the string contains every vowel (a, e, i, o, u) and false otherwise.
function hasAllVowels(string){
  var vowels = "aeiou";
    for(var i = 0; i < vowels.length; i++){
      if(string.indexOf(vowels[i]) === -1){
        return false;
      }
    }
  return true;
}
console.log(hasAllVowels('have you gone biking?'));//true
console.log(hasAllVowels('get out of the way, silly'));//true
console.log(hasAllVowels('bootcamp prep'));//false
console.log(hasAllVowels('hello world'));//false
