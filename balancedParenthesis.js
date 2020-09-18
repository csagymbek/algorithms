// // Write a balancedParenthesis function that takes a string as input and returns a boolean — if the parentheses in the input string are ‘balanced’, then return true, else return false. For example, the program should print true for exp = “[()]{}{[()()]()}” and false for exp = “[(])”
// https://www.youtube.com/watch?v=CCyEXcNamC4
// function balancedParenthesis(string){
//   var object = {
//     "(": ")",
//     "[": "]",
//     "{": "}"
//   };
//   var stack = [];
//     for(var i = 0; i < string.length; i++){
//       if(object[string[i]] !== undefined){
//         stack.push(object[string[i]]);
//       } else if(string[i] !== stack.pop()){
//         return false;
//       }
//     }
//   return stack.length === 0;
// }
// function balancedParenthesis(string){
//   if(string.length % 2 !== 0){
//     return false;
//   }
//   while(str.includes("()") || str.includes("[]") || str.includes("{}")){
//     str = str.replace("()", "").replace("[]", "").replace("{}", "");
//   }
//   return str === "";
// }
function balancedParenthesis(str){
  if(str.length % 2 === 1){
    return false;
  }
  while(str.includes("()") || str.includes("[]") || str.includes("{}")){
    str = str.replace("()", "").replace("[]", "").replace("{}", "");
  }
  return str === "";
}
console.log(balancedParenthesis('{[]()}'));//true
console.log(balancedParenthesis('{[(])}'));//false
console.log(balancedParenthesis('{[}'));//false
