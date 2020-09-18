// Write a function isPalindrome(sentence) that returns true if the characters of the sentence string form a palindrome, false otherwise. A palindrome is a word or phrase that is the same forwards and backwards.
function isPalindrome(sentence){
  var forwards = sentence.split(" ").join("");
  var backwards = "";
    for(var i = 0; i < forwards.length; i++){
      backwards = forwards[i] + backwards;
    }
  return forwards === backwards;
}
console.log(isPalindrome('rats live on no evil star'));//true
console.log(isPalindrome('stella won no wallets'));//true
console.log(isPalindrome('racecar'));//true
console.log(isPalindrome('hello world'));//false
