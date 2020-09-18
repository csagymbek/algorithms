// Write a function `censorSentence(sentence, curseWords)` that censors the given sentence by replacing the vowels in the curse words array with "*". Assume no punctuation.
function replaceVowels(word){
  var vowels = "aeiouAEIOU";
  var newWord = "";
    for(var i = 0; i < word.length; i++){
      if(vowels.indexOf(word[i]) > -1){
        newWord += "*";
      } else{
        newWord += word[i];
      }
    }
  return newWord;
}
// console.log(replaceVowels("Darn"));//D*rn

function censorSentence(sentence, curseWords){
  var sentence = sentence.split(" ");
  var censored = [];
    for(var i = 0; i < sentence.length; i++){
      if(curseWords.indexOf(sentence[i].toLowerCase()) > -1){
        censored.push(replaceVowels(sentence[i]));
      } else{
        censored.push(sentence[i]);
      }
    }
  return censored.join(" ");
}
var result1 = censorSentence("Darn you Harold you son of a gun", ["darn", "gun"]);
console.log(result1);//"D*rn you Harold you son of a g*n"
var result2 = censorSentence("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]);
console.log(result2);//"Schn*k*ys I dont give a d*ddly sq**t"
