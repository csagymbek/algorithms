// Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th
function humanize(num){
 var ten = num % 10;
 var hundred = num % 100;
   if(ten === 1 && hundred !== 11){
     return num + "st";
   } else if(ten === 2 && hundred !== 12){
     return num + "nd";
   } else if(ten ===  3 && hundred !== 13){
     return num + "rd";
   }
   return num + "th";
}
console.log(humanize(1));//"1st"
console.log(humanize(20));//"20th"
console.log(humanize(302));//"302nd"
