/***********************************************************************
In these exercises we will be practicing decomposition by building
multiple functions. Be sure to test each function thoroughly as you go
before moving on to the next problem. Each function will require the
previous to solve.
***********************************************************************/
/***********************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if
`number` is prime or not. Assume `number` is a positive integer.
***********************************************************************/
function isPrime(number) {

  for(var i = 2; i < number; i++){
    if(number % i === 0){
      return false;
    }
  }

  return true;
}
console.log(isPrime(2)); // => true
console.log(isPrime(1693)); // => true
console.log(isPrime(15)); // => false
console.log(isPrime(303212)); // => false
/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.
***********************************************************************/
function firstNPrimes(n) {
  var arr = [];

  for(var i = 2; arr.length < n; i++){
    if(isPrime(i)){
      arr.push(i);
    }
  }

  return arr;
}
console.log(firstNPrimes(0)); // => []
console.log(firstNPrimes(1)); // => [2]
console.log(firstNPrimes(4)); // => [2, 3, 5, 7]
/***********************************************************************
Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
the sum of the first `n` prime numbers.
***********************************************************************/

function sumOfNPrimes(n) {
  var n = firstNPrimes(n);
  var sum = 0;

  for(var i = 0; i < n.length; i++){
      sum += n[i];
    }

  return sum;
}
console.log(sumOfNPrimes(0)); // => 0
console.log(sumOfNPrimes(1)); // => 2
console.log(sumOfNPrimes(4)); // => 17
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = {
  isPrime: isPrime,
  firstNPrimes: firstNPrimes,
  sumOfNPrimes: sumOfNPrimes
};
