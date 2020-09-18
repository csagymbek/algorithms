// Write a function `firstLastCap(sentence)` that takes in a sentence and
// returns a new sentence where the first and last letters of each word is
// uppercase. All other characters should be lowercase.
function firstLastCap(sentence){
  var sentence = sentence.split(" ");
  var newSentence = [];
    for(var i = 0; i < sentence.length; i++){
      newSentence.push(sentence[i][0].toUpperCase() + sentence[i].slice(1, -1).toLowerCase() + sentence[i][sentence[i].length - 1].toUpperCase());
    }
  return newSentence.join(" ");
}
console.log(firstLastCap('hello BOOTCAMP PrEp'));//'HellO BootcamP PreP'
console.log(firstLastCap('what is on the radio'));//'WhaT IS ON ThE RadiO'
