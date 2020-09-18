// Write a function laligatArray(array) that takes in an array of numbers and returns a new array where each number is replaced with its laligat sum. A number's laligat sum is the the sum of all the prime numbers less than or equal to that number. For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17
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
// console.log(prime(2));//true

function laligatSum(number){
  var sum = 0;
    for(var i = 2; i <= number; i++){
      if(prime(i)){
        sum += i;
      }
    }
  return sum;
}
// console.log(laligatSum(10));//17

function laligatArray(array){
  var newArray = [];
    for(var i = 0; i < array.length; i++){
      newArray.push(laligatSum(array[i]));
    }
  return newArray;
}
console.log(laligatArray([10, 11, 20, 15]));//[ 17, 28, 77, 41 ]
