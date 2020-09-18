// Write a recursive function `countUp(num)` that takes in a number and prints all whole numbers from `num` to 10. It should print 'done!' upon reaching 10 or greater. Do this recursively, without loops. Reference the `countdown` example from the recursion notes. Hint: use `if (num >= 10)...` as the base case.
function countUp(num){
  if(num >= 10){
    return "done!";
  } else{
    console.log(num);
    return countUp(num + 1);
  }
}
console.log(countUp(3));
//3
//4
//5
//6
//7
//8
//9
//done!
console.log(countUp(20));
//done!
