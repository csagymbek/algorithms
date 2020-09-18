// Write a function longestStreak(string, array) that takes in 2 arguments:
//  - a `string` of uppercase characters.
//  - an `array` of uppercase single-character strings.
//  The function should return the length of the longest streak of consecutive letters in the `string` that are in the `array`. Note, that a streak does not have to consist of the same letter repeated, a streak just needs to contain letters from the `array`.
function longestStreak(string, array){
  var count = 0;
  var max = 0;
    for(var i = 0; i < string.length; i++){
      if(array.indexOf(string[i]) > -1){
        count++;
        if(count > max){
          max = count;
        }
      } else{
        count = 0;
      }
    }
  return max;
}
console.log(longestStreak("ACCA", ["C"]));//2
console.log(longestStreak("YACCADCA", ["C", "A"]));//4
console.log(longestStreak("ZTKZQRKKZ", ["Z", "K", "Y"]));//3
console.log(longestStreak("YYYYY", ["Z", "K", "Y"]));//5
