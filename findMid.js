// Challenge 7: Find Middle Value of Linked List
// You have to implement the findMid() function which will take a linked list as an input and return the value of the middle node. If the length of the list is even, the middle value will occur at $ \frac{length}{2}$. For a list of odd length, the middle value will be $ \frac{length}{2}+1$.
function findMid(list){
  if(list.isEmpty()){
    return null;
  }
  var node = list.getHead();
  var mid = 0;
  if(list.length % 2 === 0){
    mid = list.length / 2;
  } else{
    mid = list.length / 2 + 1;
  }
  for(var i = 0; i < mid; i++){
    node = node.next;
  }
  return node.data;
}
var list = new LinkedList();
list.insertAtHead(22);
list.insertAtHead(20);
list.insertAtHead(12);
list.insertAtHead(10);
list.printList();
console.log(findMid(list));
// We traverse the whole list to find its length. The middle position can be calculated by halving the length. The algorithm makes a linear traversal over the list. Hence, the time complexity is O(n).
