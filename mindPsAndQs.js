// Write a function mindPsAndQs(string) that accepts a string of uppercase letters. The function should return the length of the longest consecutive streak of the letters 'P' and 'Q'. Use two variables. One to track the length of the current streak and another to track the length of the longest streak so far. Think of using a strategy similar to maxValue. This can also be solved using a single loop.
function mindPsAndQs(string){
  var count = 0;
  var max = 0;
    for(var i = 0; i < string.length; i++){
      if(string[i] === "P" || string[i] === "Q"){
        count++;
        if(count > max){
          max = count;
        }
      } else{
        count = 0;
      }
    }
  return max;
}
console.log(mindPsAndQs('BOOTCAMP'));//1
console.log(mindPsAndQs('APCDQQPPC'));//4
console.log(mindPsAndQs('PQPQ'));//4
console.log(mindPsAndQs('PPPXQPPPQ'));//5
