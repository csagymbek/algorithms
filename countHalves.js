// Write a recursive function `countHalves(n)` that takes in a number and prints n, n/2, n/4, n/8, n / 16, and so on. This process should stop once the result goes below 1. It should print `done!` upon going below 1.
// Hint: use `if(n < 1)...` as the base case
function countHalves(n){
  if(n < 1){
    return "done!";
  } else{
    console.log(n);
    return countHalves(n / 2);
  }
}
console.log(countHalves(20));//prints
// 20
// 10
// 5
// 2.5
// 1.25
// done!
