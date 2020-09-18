// Write a function favoriteWord(favoriteLetter, sentence) that takes in a single letter and a sentence string. The function should return the word in the sentence that contains `favoriteLetter` the most. If there are ties, return the word that appears first in the sentence.
function countLetter(letter, word){
  var count = 0;
    for(var i = 0; i < word.length; i++){
      if(letter === word[i]){
        count++;
      }
    }
  return count;
}

function favoriteWord(favoriteLetter, sentence){
  var max = "";
  var sentence = sentence.split(" ");
    for(var i = 0; i < sentence.length; i++){
      if(countLetter(favoriteLetter, sentence[i]) > countLetter(favoriteLetter, max)){
        max = sentence[i];
      }
    }
  return max;
}
console.log(favoriteWord('p', 'sinful caesar sipped his snifter'));// 'sipped'
console.log(favoriteWord('a', 'sinful caesar sipped his snifter'));//'caesar'
console.log(favoriteWord('s', 'sinful caesar sipped his snifter'));//'sinful'
console.log(favoriteWord('x', 'sinful caesar sipped his snifter'));//''
