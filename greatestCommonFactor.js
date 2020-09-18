// Write a function greatestCommonFactor(num1, num2) that returns the greatest common factor between num1 and num2. This means that the function should return the largest number that divides both num1 and num2.
function greatestCommonFactor(num1, num2){
  for(var i = num1 + num2; i >= 1; i--){
    if(num1 % i === 0 && num2 % i === 0){
      return i;
    }
  }
}
console.log(greatestCommonFactor(6, 10));//2
console.log(greatestCommonFactor(10, 15));//5
console.log(greatestCommonFactor(4, 7));//1
console.log(greatestCommonFactor(4, 8));//4
console.log(greatestCommonFactor(45, 30));//15
