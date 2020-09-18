// Write a function intersect(arr1, arr2) that takes in two arrays and returns a new array containing the elements common to both arr1 and arr2.
function intersect(arr1, arr2){
  var arr3 = [];
    for(var i = 0; i < arr1.length; i++){
      if(arr2.indexOf(arr1[i]) > -1){
        arr3.push(arr1[i]);
      }
    }
  return arr3;
}
console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']));//[ 'b', 'd' ]
console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z']));//[]
