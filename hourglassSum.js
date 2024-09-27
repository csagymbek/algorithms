// Given a  2D Array, :

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// An hourglass in  is a subset of values with indices falling in this pattern in 's graphical representation:

// a b c
//   d
// e f g
// There are  hourglasses in . An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be .

// Example
// -9 -9 -9  1 1 1 
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0
// The  hourglass sums are:

// -63, -34, -9, 12, 
// -10,   0, 28, 23, 
// -27, -11, -2, 10, 
//   9,  17, 25, 18
// The highest hourglass sum is  from the hourglass beginning at row , column :

// 0 4 3
//   1
// 8 6 6

const hourglassSum = (ar) => {  
    let max = -Infinity;
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            max = Math.max(max, ar[i][j] + ar[i][j + 1] + ar[i][j + 2] + ar[i + 1][j + 1] + ar[i + 2][j] + ar[i + 2][j + 1] + ar[i + 2][j + 2]);
        }
    }
    return max;
};

console.log(hourglassSum([
    [1, 1, 1, 0, 0, 0], // Row 0
    [0, 1, 0, 0, 0, 0], // Row 1
    [1, 1, 1, 0, 0, 0], // Row 2
    [0, 0, 2, 4, 4, 0], // Row 3
    [0, 0, 0, 2, 0, 0], // Row 4
    [0, 0, 1, 2, 4, 0]  // Row 5
]));// 19
console.log(hourglassSum([
    [1, 1, 1, 0, 0, 0],  // Row 0
    [0, 1, 0, 0, 0, 0],  // Row 1
    [1, 1, 1, 0, 0, 0],  // Row 2
    [0, 9, 2, -4, -4, 0], // Row 3
    [0, 0, 0, -2, 0, 0], // Row 4
    [0, 0, -1, -2, -4, 0] // Row 5
]));// 13