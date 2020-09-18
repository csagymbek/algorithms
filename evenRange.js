// Write a function evenRange(start, end) that returns an array containing all even numbers between 'start' and 'end' in sequential order.
function evenRange(start, end){
  var array = [];
    for(var i = start; i <= end; i++){
      if(i % 2 === 0){
        array.push(i);
      }
    }
  return array;
}
console.log(evenRange(13, 20));//[ 14, 16, 18, 20 ]
console.log(evenRange(4, 11));//[ 4, 6, 8, 10 ]
console.log(evenRange(8, 5));//[]
