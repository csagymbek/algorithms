// Write a JavaScript function to convert an amount to coins. https://www.w3resource.com/javascript-exercises/javascript-function-exercise-14.php
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1]). Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. Output : 25, 10, 10, 1
// Recursive solution
// function amountToCoins(amount, coins){
//   if(amount === 0){
//     return [];
//   } else if(amount >= coins[0]){
//     var left = amount - coins[0];
//     return [coins[0]].concat(amountToCoins(left, coins));
//   } else{
//     coins.shift();
//     return amountToCoins(amount, coins);
//   }
// }
// Classic loop/while solution
function amountToCoins(amount, coins){
  var result = [];
    for(var i = 0; i < coins.length; i++){
      while(amount >= coins[i]){
        result.push(coins[i]);
        amount -= coins[i];
      }
    }
  return result;
}
console.log(amountToCoins(268, [100, 50, 25, 10, 5, 1]));//[100, 100, 50, 10, 5, 1, 1, 1]
