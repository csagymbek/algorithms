function deleteAtHead(list){
  var head = list.getHead();
  var firstElement = head.next;
  if(firstElement !== null){
    head.next = firstElement.next;
    firstElement.next = null;
  }
  this.length--;
  return this;
}
var list = new LinkedList();
for(var i = 0; i < 10; i++){
  list.insertAtHead(i);
}
list.printList();
deleteAtHead(list);
deleteAtHead(list);
list.printList();
// Time Complexity: O(1)
// We access the first element if the list: firstElement = head.nextElement
// firstElement can either be a node (the list is not empty) or it can be null (the list is empty). If a node is found, its nextElement becomes the nextElement of the head. Now, firstElement has been removed from the linked list and its deletion from memory will be handled by JavaScript since we haven’t specified a destructor.
