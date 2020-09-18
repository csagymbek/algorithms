// Challenge 4: Find the Length of a Linked List
// In this problem, you have to implement the length() function which will find the ​length of a given linked list.
function length(list){
  var length = 0;
  var currentNode = list.getHead().next;
  while(currentNode !== null){
    length += 1;
    currentNode = currentNode.next;
  }
  return length;
}
var list = new LinkedList();
list.insertAtHead(4);
list.insertAtHead(3);
list.insertAtHead(2);
list.insertAtHead(1);
list.insertAtHead(0);
console.log(length(list));
console.log(length(3 -> 1 -> 9 -> null));//3
console.log(length(5 -> 2 -> null));//2
console.log(length(null));//0
// The logic is very similar to that of the search function. The trick is to iterate through the list and keep count of how many nodes you’ve visited. This count can be kept in the length variable. Since this is a linear algorithm, the time complexity will be O(n).
