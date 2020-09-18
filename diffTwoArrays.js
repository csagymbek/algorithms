// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// function diffTwoArrays(arr1, arr2){
//   var arr3 = arr1.concat(arr2);
//   var arr4 = [];
//     for(var i = 0; i < arr3.length; i++){
//       if(arr1.indexOf(arr3[i]) === -1 || arr2.indexOf(arr3[i]) === -1){
//         arr4.push(arr3[i]);
//       }
//     }
//   return arr4;
// }


function diffTwoArrays(arr1, arr2){
  return arr1
  .concat(arr2)
  .filter(el => !arr1.includes(el) || !arr2.includes(el));
}
//   return arr1//return the final iteration of the array
//   .concat(arr2)//combine arr1 and arr2 into a new array
//   .filter(el //create a new array with elements that pass a test
//     => //shorthand for function expression
//     !arr1.includes(el)//elements that are not included in arr1
//     || !arr2.includes(el)//elements that are not included in arr2
console.log(diffTwoArrays([1, 2, 3, 5], [1, 2, 3, 4, 5]));//[4]
console.log(diffTwoArrays([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));//["piglet", 4].
