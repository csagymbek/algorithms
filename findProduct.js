// Implement a function, findProduct(arr), which modifies an array so that each index has a product of all the numbers present in the array except the number stored at that index.
// #1: Using a nested loop
// This solution iterates over the array and calculates the product of all the numbers to the right of each element, as demonstrated on lines 9 and 10. Then it appends the product of all the elements to the right of the current element and the product of all the elements to the left of the current element as on line 13. It then calculates the product of all the elements to the right by multiplying the current element with left which gets updated on line 15. This algorithm is in O(n^2) because the array is iterated over n+n(n+1)/2 times.
// function findProduct(ar){
//   var newAr = [];
//   var left = 1, cur;
//     for(var i = 0; i < ar.length; i++){
//       cur = 1;
//       for(var j = i + 1; j < ar.length; j++){
//         cur *= ar[j];
//       }
//       newAr.push(cur * left);
//       left *= ar[i];
//     }
//   return newAr;
// }

// #2: Optimizing the number of multiplications
// The algorithm for this solution is to first create a new list with the products of all the elements to the left of each element. Then multiply each element in that list to the product of all the elements to the right of the list by traversing it in reverse. Since this algorithm only traverses over the list twice so the complexity expression is n + nn+n and the final term becomes O(n).
function findProduct(ar){
  var newAr = [];
  var left = 1;
    for(var i = 0; i < ar.length; i++){
      newAr.push(left);
      left *= ar[i];
    }
  var right = 1;
    for(var j = ar.length - 1; j > -1; j--){
      newAr[j] *= right;
      right *= ar[j];
    }
  return newAr;
}
console.log(findProduct([1, 2, 3, 4]));//[24, 12, 8, 6]
console.log(findProduct([1, 2, 3, 4, 5]));//[120, 60, 40, 30, 24]
console.log(findProduct([4, 2, 1, 5, 0]));//[0, 0, 0, 0, 40]
