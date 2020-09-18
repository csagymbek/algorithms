// Write a function longestWord(sentence) that returns the longest word of a sentence. If there are ties, the function should return the later word.
function longestWord(sentence){
  var sentence = sentence.split(" ");
  var max = "";
    for(var i = 0; i < sentence.length; i++){
      if(sentence[i].length >= max.length){
        max = sentence[i];
      }
    }
  return max;
}
console.log(longestWord('app academy is cool'));//'academy'
console.log(longestWord('hate having hungry hippos'));//'hippos'
console.log(longestWord('bootcamp'));//'bootcamp'
console.log(longestWord(''));//''
