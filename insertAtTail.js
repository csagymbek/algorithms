// Insertion at Tail
function insertAtTail(list, value){
  var node = new Node(value);
  var currentNode = list.getHead();
  if(currentNode.next === null){
    currentNode.next = node;
    list.length += 1;
    return list;
  }
  while(currentNode !== null){
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  list.length += 1;
  return list;
}
// If the list is empty, the code will skip the loop and jump to line 20. Otherwise, we can simply use a loop to reach the tail of the list​ and set our new Node as the nextElement of the previous last Node. This algorithm traverses the entire linked list and hence, works in O(n) time.
