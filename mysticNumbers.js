// Write a function mysticNumbers(max) that returns an array of numbers less than `max`. Each number should be either divisible by 4 or 6, BUT NOT BOTH. The numbers should be in reverse-sequential order.
function mysticNumbers(max){
  var array = [];
  for(var i = max - 1; i >= 0; i--){
    if(i % 4 === 0 && i % 6 === 0){
      continue;
      };
      if(i % 4 === 0 || i % 6 === 0){
      array.push(i);
    };
  };
  return array;
};
console.log(mysticNumbers(25));//[ 20, 18, 16, 8, 6, 4 ]
console.log(mysticNumbers(14));//[ 8, 6, 4 ]
