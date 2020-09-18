// Implement a function findSecondMaximum(arr) which returns the second largest element in the array. Assume that the array length will always be greater than 1 and it will not contain duplicates, i.e. there will always be a maximum and a second maximum.
// Solution #1: Sort and index
// We first sort the array, then index, and return the second largest element (present at second last index: arr.length - 2) from the sorted array. We use the generic JavaScript sort() function, but in a real interview, you should implement your favorite sorting algorithm here! Remember to always take care of edge cases, such as the input array being smaller than two here. The time complexity of this solution is O(nlogn) or whatever is the complexity of your sorting algorithm.
// function findSecondMaximum(ar){
//   if(ar.sort().length >= 2){
//     return ar[ar.length - 2];
//   } else{
//     return null;
//   }
// }

// Solution #2: Traversing the array twice
// We traverse the array twice. In the first traversal, we find the first maximum element. In the second traversal, we find the second maximum element less than the one obtained in the first traversal. The time complexity of the solution is in O(n) since the list is traversed in twice.
// function findSecondMaximum(ar){
//   var max1 = 0;
//   var max2 = 0;
//     for(var i of ar){
//       if(i > max1){
//         max1 = i;
//       }
//     }
//     for(var j of ar){
//       if(j < max1 && j > max2){
//         max2 = j;
//       }
//     }
//   return max2;
// }

// Solution #3: Finding the Second Largest in one Traversal. We initialize two variables max and secondmax to -inf. We then traverse the array, and if the current element in the array is greater than the maximum value, then set secondmax to max and max to the current element. If the current element is in between the first and second, then update secondmax to store the value of the current variable. Finally, return the value stored in secondmax. This solution is in O(n) since the array is traversed once only.
function findSecondMaximum(ar){
  var max1 = 0;
  var max2 = 0;
    for(var i of ar){
      if(i > max1){
        max2 = max1;
        max1 = i;
      } else if(i > max2){
        max2 = i;
      }
    }
  return max2;
}
console.log(findSecondMaximum([9, 2, 3, 6]));//6
console.log(findSecondMaximum([4, 2, 1, 5, 0]));//4
console.log(findSecondMaximum([5, 0]));//0
console.log(findSecondMaximum([5]));//null or 0
