// Write a function isSquare(number) that takes in a number and returns true if the number is a perfect square, false otherwise. A perfect square is a number that is the result of squaring another number. For example, 3 * 3 is 9, so 9 is perfect square. 4 * 4 is 16, so 16 is a perfect square. 18 is not a perfect square.
function isSquare(number){
  for(var i = 1; i < number; i++){
    if(i * i === number){
      return true;
    }
  }
  return false
}
console.log(isSquare(7));//false
console.log(isSquare(15));//false
console.log(isSquare(18));//false
console.log(isSquare(25));// true
console.log(isSquare(36));// true
console.log(isSquare(9));// true
console.log(isSquare(16));// true
