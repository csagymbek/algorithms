// Write a function `longWordCount(string)` that takes in a string and returns the number of words longer than 7 characters.
function longWordCount(string){
  var string = string.split(" ");
  var count = 0;
    for(var i = 0; i < string.length; i++){
      if(string[i].length > 7){
        count++;
      }
    }
  return count;
}
console.log(longWordCount(""));//0
console.log(longWordCount("short words only"));//0
console.log(longWordCount("one reallylong word"));//1
console.log(longWordCount("two reallylong words inthisstring"));//2
console.log(longWordCount("allwordword longwordword wordswordword"));//3
console.log(longWordCount("seventy schfifty five"));//1
