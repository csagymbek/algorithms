// Write a function bigramArray(sentence) that takes in a sentence string and returns an array of containing all bigrams in the sentence. A bigram is a pair of consecutive words of a sentence.
function bigramArray(sentence){
  var array = [];
  var sentence = sentence.split(" ");
    for(var i = 0; i < sentence.length - 1; i++){
      array.push(sentence[i] + " " + sentence[i + 1]);
    }
  return array;
}
console.log(bigramArray('today is a great day'));//[ 'today is', 'is a', 'a great', 'great day' ]
console.log(bigramArray('bigrams are very useful'));//[ 'bigrams are', 'are very', 'very useful' ]
