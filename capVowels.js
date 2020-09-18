// Write a function called capVowels(string) that takes in a string and returns the string where every vowel is capitalized. All other letters should be lowercased. Hint: Don't forget that strings are immutable!
function capVowels(string){
  var newString = "";
  var vowels = "aeiouAEIOU";
    for(var i = 0; i < string.length; i++){
      if(vowels.indexOf(string[i]) > -1){
        newString += string[i].toUpperCase();
      } else{
        newString += string[i].toLowerCase();
      }
    }
  return newString;
}
console.log(capVowels('hello world'));//'hEllO wOrld'
console.log(capVowels('HELLO WORLD'));//'hEllO wOrld'
console.log(capVowels('boOtCamP PreP'));//'bOOtcAmp prEp'
