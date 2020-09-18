// The idea behind bubble sort is that every pair of adjacent values is compared, and then the two values swap positions if the first value is greater than the second. This way during each pass through the array, the largest value “bubbles up” to the top, and after each pass the elements furthest to the right are in the correct order. Here’s an example: given the array [5,3,1,4,6] we can use bubble sort to sort the array in ascending order. It’ll start by comparing the first pair of values, 5 & 3. 3 is smaller than 5, so it’ll swap the two values and then move on to compare the next pair of values, 5 & 1. It’ll continue doing this over and over until the array is sorted:
function bubbleSort(array){
  var swapped;
    do{
      swapped = false;
      for(var i = 0; i < array.length; i++){
        if(array[i] > array[i + 1]){
          var max = array[i];
          array[i] = array[i + 1];
          array[i + 1] = max;
          swapped = true;
        }
      }
    } while(swapped){
      return array;
    }
}
console.log(bubbleSort([9, 5, 8, 4, 2, 3, 10, 1, 6]));//[0, 1, 2, 3, 4, 5, 6, 8, 9]
