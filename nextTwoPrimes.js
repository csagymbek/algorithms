// Write a function `nextTwoPrimes(num)` that takes in a number `num` and returns the next two prime numbers greater than `num`.
function nextTwoPrimes(num){
  var prime = function prime(num){
    if(num < 2){
      return false;
    };
    for(var i = 2; i < num; i++){
      if(num % i === 0){
        return false;
      };
    };
    return true;
  };
  var array = [];
  for(var i = num + 1; array.length < 2; i++){
    if(prime(i)){
       array.push(i);
    };
  };
  return array;
};
console.log(nextTwoPrimes(2));//[ 3, 5 ]
console.log(nextTwoPrimes(3));//[ 5, 7 ]
console.log(nextTwoPrimes(7));//[ 11, 13 ]
console.log(nextTwoPrimes(8));//[ 11, 13 ]
console.log(nextTwoPrimes(20));//[ 23, 29 ]
console.log(nextTwoPrimes(97));//[ 101, 103 ]
