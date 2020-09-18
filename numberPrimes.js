// Write a function numberOfPrimes(n) that takes in a number,`n`. The function should return the number of prime numbers less than or equal to `n`. For example, there are 4 prime numbers less than or equal to 10: 2, 3, 5, 7.
function prime(number){
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

function numberOfPrimes(n){
  var count = 0;
    for(var i = 2; i <= n; i++){
      if(prime(i)){
        count++;
      }
    }
  return count;
}
console.log(numberOfPrimes(10));//4
console.log(numberOfPrimes(12));//5
console.log(numberOfPrimes(20));//8
console.log(numberOfPrimes(100));//25
