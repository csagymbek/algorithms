// The solution becomes very compact by using the spread operator and the .sort() function in JavaScipt. The spread operator concatenates arr1 and arr2 while the .sort() function sorts the concatenated arrays. However, a much efficient solution is given below. The time complexity for this solution will be O(n log n )O(nlogn) since we are using the .sort() function.
function mergeArs(ar1, ar2){
return [...ar1, ...ar2].sort((a, b) => a - b);
}
console.log(mergeArs([4, 5, 6], [-2, -1, 0, 7]));//[ -2, -1, 0, 4, 5, 6, 7 ]
