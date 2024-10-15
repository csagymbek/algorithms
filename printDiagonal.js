// Given an MxN matrix, write code which prints out the diagonals (from upper right to lower left) of the matrix. In this example where M = 4, N = 3:
// [[9, 3, 2],
//  [8, 6, 1],
//  [5, 5, 6],
//  [1, 2, 8]]


// Your code should print out:
// 9
// 3 8 
// 2 6 5 
// 1 5 1 
// 6 2
// 8


// Given a matrix of integers print out its values along the diagonals that move in the top right to bottom left direction. Each diagonal goes down and to the left as shown in the example. There should be newlines between each diagonal.

// Example:
// Input - [[1, 2, 3, 4], 
//          [5, 6, 7, 8], 
//          [9, 10, 11, 12]]
// Output -
// 1
// 2 5
// 3 6 9
// 4 7 10
// 8 11
// 12

const flattenArray = (array) => {  
    if(!Array.isArray(array)) {
        return [array];
    }
    console.log(array);
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray = newArray.concat(flattenArray(array[i]));
    }
    return newArray;
};

const printDiagonal = (matrix) => {  
    const rows = matrix.length;
    const cols = matrix[0].length;
    const diagonals = new Array(rows + cols - 1).fill(null).map(() => []);
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            diagonals[i + j].push(matrix[i][j]);
        }
    }
    console.log(diagonals);
    return flattenArray(diagonals);
};

// console.log(printDiagonal([[9, 3, 2], [8, 6, 1], [5, 5, 6], [1, 2, 8]]));// 
console.log(printDiagonal([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));// 1 2 5 3 6 9 4 7 10 8 11 12