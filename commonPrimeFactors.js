// Write a function `commonPrimeFactors` that takes in two numbers as arguments and returns an array of all prime factors that are common between the two numbers. A factor is a number that divides another number without resulting in a remainder.
function prime(num){
  if(num < 2){
    return false;
  }
  for(var i = 2; i < num; i++){
    if(num % i == 0){
      return false;
    }
  }
  return true;
}

function factors(num1, num2){
  var array = [];
    for(var i = 1; i <= num1; i++){
      if(num1 % i === 0 && num2 % i === 0){
        array.push(i);
      }
    }
  return array;
}

function commonPrimeFactors(num1, num2){
  var common = factors(num1, num2);
  var primeFactors = [];
    for(var i = 0; i < common.length; i++){
      if(prime(common[i])){
        primeFactors.push(common[i]);
      }
    }
  return primeFactors;
}
console.log(commonPrimeFactors(12, 50));//[ 2 ]
console.log(commonPrimeFactors(6, 24));//[ 2, 3 ]
console.log(commonPrimeFactors(11,22));//[ 11 ]
console.log(commonPrimeFactors(45, 60));//[ 3, 5 ]
