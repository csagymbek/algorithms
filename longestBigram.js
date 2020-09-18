// Write a function longestBigram(sentence) that takes in a sentence string and returns the longest bigram in the sentence. A bigram is a pair of consecutive words. When returning the bigram, include the space between the words. Assume there will be no punctuation. In the case of a tie, return the earlier bigram.
function longestBigram(sentence){
  var longest = "";
  var sentence = sentence.split(" ");
    for(var i = 0; i < sentence.length - 1; i++){
      if((sentence[i] + " " + sentence[i + 1]).length > longest.length){
        longest = sentence[i] + " " + sentence[i + 1];
      }
    }
  return longest;
}
console.log(longestBigram('measure twice cut once'));//'measure twice'
console.log(longestBigram("One must have a mind of winter"));//'must have'
console.log(longestBigram("go home to eat"));//'go home'
console.log(longestBigram("his last assessment is fun"));//'last assessment'
