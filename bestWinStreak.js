// Write a function bestWinStreak that takes in a string of W's (wins) and L's (losses). The function should return a number representing the longest consecutive streak of wins. You may assume the only characters in the string are 'W' and 'L'.
function bestWinStreak(string){
  var count = 0;
  var max = 0;
    for(var i = 0; i < string.length; i++){
      if(string[i] === "W"){
        count++;
      } else{
        count = 0;
      }
      if(count > max){
        max = count;
      }
    }
  return max;
}
console.log(bestWinStreak('WWLWWWLWW'));//3
console.log(bestWinStreak('WWLLWWWWW'));//5
console.log(bestWinStreak('WWWW'));//4
console.log(bestWinStreak('LLL'));//0
