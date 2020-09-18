// An isogram is a word with only unique, non-repeating letters. Given two isograms of the same length, return an array with two numbers indicating matches: the first number is the number of letters matched in both words at the same position, and the second is the number of letters matched in both words but not necessarily in the same position.
function isogramMatcher(word1, word2){
  var position = 0;
  var letter = 0;
    for(var i = 0; i < word1.length; i++){
      if(word1[i] === word2[i]){
        position++;
      } else if(word2.indexOf(word1[i]) > -1){
        letter++;
      }
    }
  return [position, letter];
}
console.log(isogramMatcher("an", "at"));//[1, 0]
console.log(isogramMatcher("or", "go"));//[0, 1]
console.log(isogramMatcher("cat", "tap"));//[1, 1]
console.log(isogramMatcher("home", "dome"));//[3, 0]
console.log(isogramMatcher("ultrasonic", "ostracized"));//[3, 4]
console.log(isogramMatcher("unpredictably", "hydromagnetic"));//[1, 8]
