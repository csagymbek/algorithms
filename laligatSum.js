// Write a function laligatSum(number) that takes in a number and returns the laligatSum of that number. A number's laligat sum is the the sum of all the prime numbers less than or equal
// to that number.
function laligatSum(number){
  var prime = function(number){
    for(var i = 2; i < number; i++){
      if(number % i === 0){
        return false;
      };
    };
    return true;
  };
  var sum = 0;
  for(var i = 2; i <= number; i++){
    if(prime(i)){//if "i" is a prime number then add it so sum
      sum += i;
    };
  };
  return sum;
};
console.log(laligatSum(10));//17
console.log(laligatSum(11));//28
