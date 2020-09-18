// Write a function nextPrimeArray(array) that takes in an array of numbers.
// The function should return a new array where each prime number is replaced with the prime number that come next sequentially. For example the prime number that comes after 5 is 7.
function isPrime(number){
    if(number < 2){
      return false;
    };
    for(var i = 2; i < number; i++){
      if(number % i === 0){
        return false;
      };
    }
    return true;
};

function nextPrime(number){
    for(var i = number + 1; true; i++){
        if(isPrime(i)){
          return i;
        };
    };
};
// console.log(nextPrime(11));//13
// console.log(nextPrime(3));//5

function nextPrimeArray(array){
    var aNewArray = [];
    for(var i = 0; i < array.length; i++){
      if(isPrime(array[i])){
        aNewArray.push(nextPrime(array[i]));
      } else{
        aNewArray.push(array[i]);
      };
    };
    return aNewArray;
};
console.log(nextPrimeArray([-4, 2, 5, 4, 11]));//[ -4, 3, 7, 4, 13 ]
console.log(nextPrimeArray([9, 13, 5, 6]));//[ 9, 17, 7, 6 ]
console.log(nextPrimeArray([]));//[]
