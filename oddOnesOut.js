// Write a function oddOnesOut(array) that takes in an array of strings and returns a new array containing only elements that appeared an even number of times in the input array.
function oddOnesOut(array){
  var newArray = [];
  var object = {};
    for(var i = 0; i < array.length; i++){
      if(object[array[i]] === undefined){
        object[array[i]] = 1;
      } else{
        object[array[i]]++;
      }
    }
    for(var key in object){
      if(object[key] % 2 === 0){
        newArray.push(key);
      }
    }
  return newArray;
}
var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
console.log(oddOnesOut(arr1));//[ 'b', 'd' ]

var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
console.log(oddOnesOut(arr2));//[ 'fish' ]
