// Write a function `mySome(arr, cb)` that takes in an array and a callback. The function should call the callback for every element of the array. The function should return true if the callback returns true when passed in any element of the array. The function should return false otherwise.
function mySome(arr, cb){
  for(var i = 0; i < arr.length; i++){
    if(cb(arr[i]) === true){
      return true;
    };
  };
  return false;
};

function isNegative(num){
  return num < 0;
};
console.log(mySome([10, -10, 11, 4], isNegative));//true
console.log(mySome([-10, -10, -11, -4], isNegative));//true
console.log(mySome([2, 4, 6, 8], isNegative));//false
