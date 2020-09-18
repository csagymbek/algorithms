// Write a function `moreDotLessDash(string)` that takes in a string and returns true if the string contains more dots ('.') than dashes ('-'), false otherwise.
function moreDotLessDash(string){
  var dots = 0;
  var dashes = 0;
    for(var i = 0; i < string.length; i++){
      if(string[i] === "."){
        dots++;
      } else if(string[i] === "-"){
        dashes++;
      }
    }
  return dots > dashes;
}
console.log(moreDotLessDash('2-D arrays are fun. I think.'));//true
console.log(moreDotLessDash('.-.-.'));//true
console.log(moreDotLessDash('.-'));//false
console.log(moreDotLessDash('..--'));//false
