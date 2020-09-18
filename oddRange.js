// Write a function oddRange(number) that takes in a number and returns an array containing all positive odd numbers up to the `number`.
function oddRange(number){
  var array = [];
    for(var i = 1; i <= number; i++){
      if(i % 2 === 1){
        array.push(i);
      }
    }
  return array;
}
console.log(oddRange(13));//[ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6));//[ 1, 3, 5 ]
