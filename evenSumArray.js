// Write a function evenSumArray(array) that takes in an array of numbers and returns a new array where each number is replaced with the sum of all even numbers less than or equal to that number.
function evenSumNumber(number){
  var sum = 0;
    // for(var i = 1; i <= number; i++){
    //   if(i % 2 === 0){
    //     sum += i;
    //   }
  // }
    for(var i = 2; i <= number; i += 2){
      sum += i;
    }
  return sum;
}

function evenSumArray(array){
  var newArray = [];
    for(var i = 0; i < array.length; i++){
      newArray.push(evenSumNumber(array[i]));
    }
  return newArray;
}
console.log(evenSumArray([6, 7, 5]));//[ 12, 12, 6 ]
console.log(evenSumArray([2, 8, 3, 5]));//[ 2, 20, 2, 6 ]
