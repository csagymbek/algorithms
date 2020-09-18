// Write a function numsToWords(numString) that takes in a string representing a number. The function should return a new string where each digit character is replaced with it's "word" respresentation. Assume the input string only contains numeric characters.
function numsToWords(numString){
  var newString = "";
  var object = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten"
  };
  for(var i = 0; i < numString.length; i++){
    if(object[numString[i]] !== undefined){
      newString += object[numString[i]];
    }
  }
  return newString;
};
console.log(numsToWords('42'));//'FourTwo'
console.log(numsToWords('123'));//'OneTwoThree'
console.log(numsToWords('159598'));//'OneFiveNineFiveNineEight'
