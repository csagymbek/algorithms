// 1926. Nearest Exit from Entrance in Maze

// You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). 
// You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.
// In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. 
// Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.
// Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

// Example 1:
// Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
// Output: 1
// Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
// Initially, you are at the entrance cell [1,2].
// - You can reach [1,0] by moving 2 steps left.
// - You can reach [0,2] by moving 1 step up.
// It is impossible to reach [2,3] from the entrance.
// Thus, the nearest exit is [0,2], which is 1 step away.

// Example 2:
// Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
// Output: 2
// Explanation: There is 1 exit in this maze at [1,2].
// [1,0] does not count as an exit since it is the entrance cell.
// Initially, you are at the entrance cell [1,0].
// - You can reach [1,2] by moving 2 steps right.
// Thus, the nearest exit is [1,2], which is 2 steps away.

// Example 3:
// Input: maze = [[".","+"]], entrance = [0,0]
// Output: -1
// Explanation: There are no exits in this maze.

// const nearestExit = (maze, [y0, x0]) => {
//     maze[y0][x0] = '@'
//     const queue = [[y0, x0, 0]]
//     while (queue.length) {
//         const [y, x, step] = queue.shift()
//         for (const [dy, dx] of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
//             const ny = y + dy, nx = x + dx
//             if (!maze[ny]?.[nx]) {
//                 if (step) return step
//             } else if (maze[ny][nx] === '.') {
//                 queue.push([ny, nx, step + 1])
//                 maze[ny][nx] = '*'
//             }
//         }
//     }
//     return -1
// }

// var nearestExit = function(maze, entrance) {
//     let minSteps = 0;
//     const rows = maze.length;
//     const cols = maze[0].length;
//     const queue = [{x: entrance[0], y: entrance[1]}];
//     const directions = [{ x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 0, y: -1 }];
//     maze[entrance[0]][entrance[1]] = "+";
//     while(queue.length) {
//         minSteps++;
//         for(let count = queue.length; count > 0; count--) {
//             let curPosition = queue.shift();
//             for(let direction of directions) {
//                 const newX = curPosition.x + direction.x;
//                 const newY = curPosition.y + direction.y;
//                 if(newX >= 0 && newX < rows && newY >= 0 && newY < cols && maze[newX][newY] === ".") {
//                     if(newX === 0 || newX === rows - 1 || newY === 0 || newY === cols - 1) {
//                         return minSteps;
//                     }
//                     queue.push({x: newX, y: newY});
//                     maze[newX][newY] = "+";
//                 }
//             }
//         }
//     }
//     return -1;
// };

console.log(nearestExit([["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], [1,2]));// 1
console.log(nearestExit([["+","+","+"],[".",".","."],["+","+","+"]], [1,0]));// 2
console.log(nearestExit([[".","+"]], [0,0]));// -1

// https://algo.monster/liteproblems/1926