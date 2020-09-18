// Challenge 10 : Rearrange Sorted Array in Max/Min Form.
// Implement a function called maxMin(arr) which will re-arrange the elements of a sorted array so that the first position will have the largest number, the second will have the smallest, and the third will have second largest and so on. In other words, all the odd-numbered indices will have the largest numbers in the array in descending order and the even numbered indices will have the smallest numbers in ascending order.

// Solution #1: Creating a new array
// In this solution, we first create a new empty array that we will append the appropriate elements to and return. We then iterate through the array starting from the 00th index until the arr.length/2arr.length/2th index. So if the length of the given array is 10, the iterator variable i on line 3 in our solution would start from 0 and end at 10/2 = 510/2=5. At each iteration, we first append the largest unappended element and then the smallest. So at the first iteration, i = 0 therefore, by replacing i with 0 in arr[arr.length - (i + 1)] we get arr[arr.length-(0+1)] = arr[arr.length-1]. This is equivalent to the last element of the array and as the array is sorted, the largest element in the array is appended to the result array first and then the 0th element. Next, the second largest and the second smallest are appended and so on until the end. The time complexity of this problem is O(n) as the array is iterated over once.
function maxMin(ar){
  var newAr = [];
  for(var i = 0; i < Math.floor(ar.length / 2); i++){
    newAr.push(ar[ar.length - (i + 1)]);
    newAr.push(ar[i]);
  }
  newAr.push(ar[Math.floor(ar.length / 2)]);
  return newAr;
}
console.log(maxMin([1, 2, 3, 4, 5, 6, 7]));//[7, 1, 6, 2, 5, 3, 4]
console.log(maxMin([1, 2, 3, 4, 5]));//[5, 1, 4, 2, 3]
