// Write a function isUniqueAnagram(word1, word2) that takes in two strings. The function should return true if the strings are anagrams of each other, false otherwise. Anagrams are strings that contain the same characters, but not necessarily in the same order. Assume there will be no repeated characters in each input string.
function isUniqueAnagram(word1, word2){
  for(var i = 0; i < word1.length; i++){
    if(word2.indexOf(word1[i]) === -1){
      return false;
    } else if(word1.length !== word2.length){
      return false;
    }
  }
  return true;
}
console.log(isUniqueAnagram('iceman', 'cinema'));//true
console.log(isUniqueAnagram('abcd', 'adcb'));//true
console.log(isUniqueAnagram('abcd', 'adxb'));//false
console.log(isUniqueAnagram('abcd', 'abcdx'));//false
