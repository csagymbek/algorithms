// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
// function convertHTML(str){
//   var newStr = "";
//   var obj = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;"
//   };
//     for(var i = 0; i < str.length; i++){
//       if(obj[str[i]] !== undefined){
//         newStr += obj[str[i]];
//       } else{
//         newStr += str[i];
//       }
//     }
//   return newStr;
// }

// Create an object to use the Lookup functionality and easily find the characters.
// Split the original string by characters and use map to check for the changed html entity or use the same one.
// The a function is added which is what returns the converted entity or the original one if there is no conversion.
// Lastly we join all the characters once again.
function convertHTML(str){
  var obj = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str
  .split("")
  .map(el => obj[el] || el)
  .join("");
}
console.log(convertHTML("Dolce & Gabbana"));//Dolce &amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos"));//Hamburgers &lt; Pizza &lt; Tacos.
console.log(convertHTML("Sixty > twelve"));//Sixty &gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"'));//Stuff in &quot;quotation marks&quot;.
console.log(convertHTML("Schindler's List"))//Schindler&apos;s List.
console.log(convertHTML("<>"))//&lt;&gt;.
console.log(convertHTML("abc"))//abc.
