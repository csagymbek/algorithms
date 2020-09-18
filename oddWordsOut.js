// Write a function oddWordsOut(sentence) that takes in a sentence string and returns the sentence where words with an odd number of characters are removed.
function oddWordsOut(sentence){
  var newSentence = [];
  var sentence = sentence.split(" ");
    for(var i = 0; i < sentence.length; i++){
      if(sentence[i].length % 2 === 0){
        newSentence.push(sentence[i]);
      }
    }
  return newSentence.join(" ");
}
console.log(oddWordsOut('go to the store and buy milk'));//'go to milk'
console.log(oddWordsOut('what is the answer'));//'what is answer'
