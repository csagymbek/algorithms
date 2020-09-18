// Write a function fibonacci(n) that takes in a number which represents the length of a sequence. The function should return the first `n` numbers in the fibonacci sequence. The first two numbers of the fibonacci sequence are 1 and 1. The next number in the sequence can be found by adding the last two numbers in the sequence.
function fibonacci(n){
  if(n === 0){
    return [];
  } else if(n === 1){
    return [1];
  }
  var seq = [1, 1];
    for(var i = 0; seq.length < n; i++){
      seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    }
  return seq;
}
console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [ 1 ]
console.log(fibonacci(2)); // [ 1, 1 ]
console.log(fibonacci(3)); // [ 1, 1, 2 ]
console.log(fibonacci(5)); // [ 1, 1, 2, 3, 5 ]
console.log(fibonacci(10)); // [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
