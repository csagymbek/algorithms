// Write a function `abbreviate(sentence)` that takes in a sentence string and returns a new sentence where words longer than 4 characters have their vowels removed. Assume the sentence has all lowercase characters.
function removeVowels(word){
  var vowels = "aeiou";
  var newWord = "";
    for(var i = 0; i < word.length; i++){
      if(vowels.indexOf(word[i]) === -1){
        newWord += word[i];
      }
    }
  return newWord;
}

function abbreviate(sentence){
  var sentence = sentence.split(" ");
  var newSentence = [];
    for(var i = 0; i < sentence.length; i++){
      if(sentence[i].length > 4){
        newSentence.push(removeVowels(sentence[i]));
      } else{
        newSentence.push(sentence[i]);
      }
    }
  return newSentence.join(" ");
}
console.log(abbreviate('bootcamp prep is fun'));//'btcmp prep is fun'
console.log(abbreviate('programming is fantastic'));//'prgrmmng is fntstc'
console.log(abbreviate('hello world'));//'hll wrld'
console.log(abbreviate('how are you'));//'how are you'
