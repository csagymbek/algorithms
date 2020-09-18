// Given an array, find the first integer which is unique in the array. Unique means the number does not repeat and appears only once in the whole array. We first create a JavaScript Dictionary on line 2 using curly braces. Unlike arrays, dictionaries are indexed by keys, which can be any immutable type; strings and numbers can always be keys. So, the keys in the counts dictionary are the elements of the given array and the values are the number of occurrences of the elements in the given array. We then iterate over the array once again and check the corresponding value in the counts object to the key, i.e. the array element. If an array element has occurred only once, we will simply return it. Also, note that the returning number will be the first array element that would have met this condition because we are checking for occurrences in the order the elements are in the​ array. Since the list is iterated over twice, the time complexity is linear i.e. O(n).

// Using a JavaScript dictionary to keep count of repetitions
function findFirstUnique(ar){
  var obj = {};
  for(var i of ar){
    if(obj[i]){
      obj[i]++;
    } else{
      obj[i] = 1;
    }
  }
  for(var i of ar){
    if(obj[i] === 1){
      return i; 
    }
  }
}
console.log(findFirstUnique([9,2,3,2,6,6]));//9
console.log(findFirstUnique([4,5,1,2,0,4]));//5
