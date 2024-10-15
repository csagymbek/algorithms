// Find difference between sums of two diagonals
// Given a matrix of n X n. The task is to calculate the absolute difference between the sums of its diagonal.

// Time O(n2) Space O(1)
// const diagonalDifference = (arr) => {  
//     let  diagonalLeft = 0;
//     let diagonalRight = 0;
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             if(i === j) {
//                 diagonalLeft += arr[i][j];
//                 console.log(arr[j][i]);
//             }
//             if(i === arr.length - 1  - j) {
//                 console.log(arr[j][i]);
//                 diagonalRight += arr[j][i];
//             }
//         }
//     }
//     console.log(diagonalLeft);
//     console.log(diagonalRight);
//     return Math.abs(diagonalLeft - diagonalRight);
// };

// Time O(n) Space O(1)
const diagonalDifference = (arr) => {  
    let diagonalLeft = 0;
    let diagonalRight = 0;
    for(let i = 0; i < arr.length; i++) {
        diagonalLeft += arr[i][i];
        diagonalRight += arr[i][arr.length - 1 - i];
    }
    return Math.abs(diagonalLeft - diagonalRight);
};

console.log(diagonalDifference([[11, 2, 4], [4 , 5, 6], [10, 8, -12]]));// 15