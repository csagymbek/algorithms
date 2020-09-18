// Write a function `greatestMap(array, cb1, cb2)` which takes as an argument an array of numbers and two callbacks. It returns a new array with each element from array "mapped" to a new element using whichever callback returns a larger mapped value. Both callbacks take as arguments the element, index, and an array.
var ary1 = [1, 5, 10];

function squareRootRounder(num){
  return Math.round(Math.sqrt(num));
}

function half(num){
  return num / 2;
}

function greatestMap(array, cb1, cb2){
  var newArray = [];
    for(var i = 0; i < array.length; i++){
      if(cb1(array[i], i, array) > cb2(array[i], i, array)){
        newArray.push(cb1(array[i], i, array));
      } else{
        newArray.push(cb2(array[i], i, array));
      }
    }
  return newArray;
}
console.log(greatestMap(ary1, squareRootRounder, half));//[ 1, 2.5, 5 ]
