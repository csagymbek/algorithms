// Write a function `isPrime(number)` that returns a boolean indicating if `number` is prime or not. Assume `number` is a positive integer.
// Using the `isPrime` function you made, write a function `firstNPrimes(n)` that returns an array of the first `n` prime numbers.
// function firstNPrimes(n){
//   var isPrime = function(number){
//     for(var i = 2; i < number; i++){
//       if(number % i === 0){
//         return false;
//       };
//     };
//     return true;
//   };
//   var array = [];
// for(var i = 2; array.length < n; i++){
//   if(isPrime(i)){
//     array.push(i);
//   }
// }
//   return array;
// };
// // console.log(firstNPrimes(0));//[]
// // console.log(firstNPrimes(1));//[2]
// // console.log(firstNPrimes(4));//[2, 3, 5, 7]
// // Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns the sum of the first `n` prime numbers.
// function sumOfNPrimes(n){
// var sum = 0;
// for(var i = 0; i < firstNPrimes(n).length; i++){
//       sum += firstNPrimes(n)[i];
//   };
// return sum;
// };
function sumOfNPrimes(n){
  var prime = function prime(number){
    for(var i = 2; i < number; i++){
      if(number % i === 0){
        return false;
      };
    };
    return true;
  };
  var firstNPrimes = function firstNPrimes(number){
    var array = [];
      for(var i = 2; array.length < number; i++){
        if(prime(i)){
          array.push(i);
        };
      };
    return array;
  };
  var sum = 0;
  for(var i = 0; i < firstNPrimes(n).length; i++){
    sum += firstNPrimes(n)[i];
  };
  return sum;
}
console.log(sumOfNPrimes(0));//0
console.log(sumOfNPrimes(1));//2
console.log(sumOfNPrimes(4));//17
