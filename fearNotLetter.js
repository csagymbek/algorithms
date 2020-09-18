// Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.
// https://www.youtube.com/watch?v=ZdU3v0irI24
// https://medium.com/@hugh.winchester/missing-letters-c3ceef6c8895
// function fearNotLetter(str){
//   var nums = str.split("").map(function(letter){
//     return letter.charCodeAt();
//   });
//   for(var i = 0; i < str.length; i++){
//     if((nums[i + 1] - nums[i]) > 1){
//       return String.fromCharCode(nums[i] + 1);
//     }
//   }
//   return undefined;
// }

// function fearNotLetter(str){
//   var startCode = str.charCodeAt(0);
//   for(var i = 0; i < str.length; i++){
//     if(str.charCodeAt(i) !== startCode){
//       return String.fromCharCode(startCode);
//     } else{
//       startCode++;
//     }
//   }
// }

// function fearNotLetter(str){
//   for(var i = 0; i < str.length; i++){
//     if(str[0].charCodeAt() + i !== str[i].charCodeAt()){
//       return String.fromCharCode(str[0].charCodeAt() + i);
//     }
//   }
// }

function fearNotLetter(str){
  var count = 0;
  for(var i = str.charCodeAt(0); i < str.charCodeAt(str.length - 1); i++){
    if(str.charCodeAt(count) !== i){
      return String.fromCharCode(i);
    }
    count++;
  }
  return undefined;
}
console.log(fearNotLetter("abce"));//"d".
console.log(fearNotLetter("abcdefghjklmno"));//"i".
console.log(fearNotLetter("stvwx"));//"u".
console.log(fearNotLetter("bcdf"));//"e".
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));//undefined.
