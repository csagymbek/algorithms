// Implement a function findMinimum(arr) which finds the smallest number in the given array.
// Solution #1: Sort the array
// This solution sorts the array in ascending order and returns the first element which is the minimum. We used the generic JavaScript .sort() function here, but in a real interview, you should implement your own sort function if you’re going to use this solution. Since most popular sort functions are in O(nlogn), let’s assume that the JavaScript sort function is too. Since we only index and return after that, which are constant time operations, this solution takes O(nlogn) time.
// function findMinimum(ar){
//   return ar.sort()[0];
// }
// function findMinimum(ar){
//   (ar.sort(function(a, b){return a - b}));
//   console.log(ar);
//   return ar[0];
// }

// Solution #2: Iterate over the array
// Start with the first element in the given array, and save it as the smallest value. Then, iterate over the rest of the array and whenever an element that is smaller than the number already stored as minimum is found, set minimum to that number. By the end of the array, the number stored in minimum will be the smallest integer in the whole array. Since the entire array is iterated over once, this algorithm is in linear time, O(n).
function findMinimum(ar){
  var min = ar[0];
    for(var i of ar){
      if(i < min){
        min = i;
      }
    }
  return min;
}
console.log(findMinimum([9,2,3,6]));//2
console.log(findMinimum([4, 2, 1, 5, 0]));//0
console.log(findMinimum([9,2,3,6,-1]));//-1
