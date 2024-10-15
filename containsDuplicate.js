// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation: The element 1 occurs at the indices 0 and 3.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Explanation: All elements are distinct.

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// var containsDuplicate = function(nums) {
//     for(let i = 0; i < nums.length - 1; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] === nums[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };

// var containsDuplicate = function(nums) {
//     nums = nums.sort((a, b) => a - b);
//     for(let i = 0; i < nums.length - 1; i++) {
//         if(nums[i] === nums[i + 1]) {
//             return true;
//         }
//     }
//     return false;
// };

// const containsDuplicate = (nums) => {  
//     const set = new Set(nums);
//     console.log(set.size);
//     console.log(nums.length);
//     return set.size !== nums.length;
// };

// var containsDuplicate = function(nums) {
//     const obj = {};
//     for(let i = 0; i < nums.length; i++) {
//         obj[nums[i]] = obj[nums[i]] + 1 || 1;
//         if(obj[nums[i]] > 1) {
//             return true;
//         }
//     }
//     return false;
// };

const containsDuplicate = (nums) => {  
    for(let i = 0; i < nums.length; i++) {
        const temp = nums.slice(i + 1);
        if(temp.includes(nums[i])) {
            return true;
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1]));// true
console.log(containsDuplicate([1,2,3,4]));// false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));// true
console.log(containsDuplicate([0,4,5,0,3,6]));// true
console.log(containsDuplicate([0,4,5,0,3,6]));// true