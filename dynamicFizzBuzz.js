// Write a function dynamicFizzBuzz(max, num1, num2) that returns an array of numbers up to the max. Each number should be either divisible by num1 or num2, BUT NOT BOTH.
function dynamicFizzBuzz(max, num1, num2){
  var array = [];
    for(var i = 1; i < max; i++){
      if((i % num1 === 0 || i % num2 === 0) && !(i % num1 === 0 && i % num2 === 0)){
        array.push(i);
      }
    }
  return array;
}
console.log(dynamicFizzBuzz(20, 5, 3));//[3, 5, 6, 9, 10, 12, 18]
console.log(dynamicFizzBuzz(20, 4, 6));//[4, 6, 8, 16, 18]
