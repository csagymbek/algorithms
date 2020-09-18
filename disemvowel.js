// Write a function disemvowel(string) that takes in a string and returns a new string with all vowels removed.
function disemvowel(string){
  var newString = "";
  var vowels = "aeiouAEIOU";
    for(var i = 0; i < string.length; i++){
      if(vowels.indexOf(string[i]) === -1){
        newString += string[i];
      }
    }
  return newString;
}
console.log(disemvowel('bootcamp'));//'btcmp'
console.log(disemvowel('PREP'));//'PRP'
console.log(disemvowel('hello world'));//'hll wrld'
