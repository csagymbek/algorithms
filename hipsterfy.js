// Write a function `hipsterfy(sentence)` that takes a string containing several words as input. Remove the last vowel from each word. 'y' is not a vowel.
function removeLastVowel(word){
  var vowels = "aeiouAEIOU";
    for(var i = word.length - 1; i >= 0; i--){
      if(vowels.indexOf(word[i]) > -1){
        return word.slice(0, i) + word.slice(i + 1);
      }
    }
}
// console.log(removeLastVowel("proper"));//propr

function hipsterfy(sentence){
  var sentence = sentence.split(" ");
  var newSentence = [];
    for(var i = 0; i < sentence.length; i++){
      newSentence.push(removeLastVowel(sentence[i]));
    }
  return newSentence.join(" ");
}
console.log(hipsterfy("proper tonic panther"));//"propr tonc panthr"
console.log(hipsterfy("towel flicker banana"));//"towl flickr banan"
console.log(hipsterfy("runner anaconda"));//"runnr anacond"
