// #1: Brute Force
// This is the most time-intensive, but yet an ​intuitive solution. Traverse the whole array, and check if any of the two elements add up to the given number n. Use a nested for-loop and iterate over the entire array for each element. Since we iterate n times over the entire array of length n, the time complexity is O(n^2)O(n2).
// function findSum(ar, n){
//   for(var i of ar){
//     for(var j of ar){
//       if(i + j === n){
//         return [i, j];
//       }
//     }
//   }
//   return false;
// }

// #2: Sorting the List
// While solution #1 is very intuitive, it is not very time efficient. A better way to solve this is by first sorting the array. Then, for each element in the array, use a binary search to look for the difference between that element and the intended sum. You can implement the binarySearch() function however you like, recursively or iteratively. So, if the intended sum is n and the first element of the sorted list is a0, then you will conduct a binary search for n-a0. This will be repeated for all the elements until we find a solution.
// Since most popular sorting functions take O(nlogn), let’s assume that the JavaScript .sort() function takes the same. Then a binary search for each element takes O(logn) so a binary search for all n elements will take O(nlogn). So, overall time complexity is O(nlogn).
// function binarySearch(arr, item){
//   var first = 0, mid;
//   var last = arr.length - 1;
//   var found = false;
//   while(first <= last && !found){
//     mid = Math.floor((first + last) / 2);
//     if(arr[mid] === item){
//       found = mid;
//     } else if(item < arr[mid]){
//       last = mid - 1;
//     } else{
//       first = mid + 1;
//     }
//   }
//   return found;
// }
// function findSum(ar, val){
//   ar.sort(function(a, b){return a - b});
//   var idx;
//   for( var i of ar){
//     idx = binarySearch(ar, val - i);
//     if(idx){
//       return [i, val - i];
//     }
//   }
//   return false;
// }

// #3: Moving indices
// Since most popular sorting functions take O(nlogn)O(nlogn), let’s assume that the JavaScript .sort() function takes the same. Then, in the worst-case scenario, the entire array iterated from opposite ends would take O(n)O(n). So this solution is in O(nlog(n))O(nlog(n)).
// function findSum(ar, val){
//   ar.sort(function(a, b){return a -b});
//   var idx1 = 0,
//       idx2 = ar.length - 1,
//       newAr = [],
//       sum = 0;
//   while(idx1 != idx2){
//     sum = ar[idx1] + ar[idx2];
//     if(sum < val){
//       idx1++;
//     } else if(sum > val){
//       idx2--;
//     } else{
//       newAr.push(ar[idx1]);
//       newAr.push(ar[idx2]);
//       return newAr;
//     }
//   }
//   return false;
// }

// #4: Using a Set
// In this solution, we scan the whole array once and store visited elements in a hash set. During the scan, for every element arr[i] in arr, we check if value - arr[i] is present in the hash set i.e. value - arr[i] is already visited. If value - arr[i] is found in the hash set, it means there is a pair (arr[i], value - arr[i]) in arr whose sum is equal to the given value. If we have exhausted all elements in the array and didn’t find any such pair, the function will return false. As the array is always iterated once, the time complexity for this algorithm will be O(n). This also implies that this is the best solution for this challenge.
function findSum(ar, val){
  var newVal = new Set();
  var newAr = [];
    for(var i in ar){
      if(newVal.has(val - ar[i])){
        newAr.push(val - ar[i], ar[i]);
        return newAr;
      }
      newVal.add(ar[i]); 
    }
  return false;
}
console.log(findSum([1, 2, 3, 4], 5));//[1, 4] or [2, 3]
console.log(findSum([1, 2, 3, 4], 10));//false
