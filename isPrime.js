// Write a function `isPrime(number)` that returns a boolean indicating if `number` is prime or not.
function isPrime(number){
  if(number < 2){
    return false;
  }
  for(var i = 2; i < number; i++){
    if(number % i === 0){
      return false;
    }
  }
  return true; 
}
console.log(isPrime(-7));//false
console.log(isPrime(2));//true
console.log(isPrime(11));//true
console.log(isPrime(15));//false
