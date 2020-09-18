// Challenge 3: Deletion by Value
// You will now implement the delete function, which will take an integer value and delete the node containing it.
function deleteVal(list, value){
  var deleted = false;
  if(list.isEmpty()){
    console.log("Empty list");
    return deleted;
  }
  currentNode = list.getHead().next;
  previousNode = null;
  if(currentNode.data === value){
    list.deleteAtHead();
    deleted = true;
    return deleted;
  }
  while(currentNode !== null){
    if(value === curentNode.data){
      previousNode.next = currentNode.next;
      currentNode.next = null;
      deleted = true;
      break;
    }
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  if(deleted === false){
    console.log(String(value), "is not in list");
  } else{
    list.length--;
    console.log(String(value), " deleted!");
  }
  return deleted;
}
var list = new LinkedList();
list.insertAtHead(2);
list.insertAtHead(4);
list.insertAtHead(5);
list.insertAtHead(7);
list.insertAtHead(1);
list.printList();
deleteVal(list, 5);
list.printList();
// The algorithm is very similar to deleteAtHead. The only difference is that you need to keep track of two nodes, currentNode and previousNode. currentNode will always stay one step ahead of previousNode. Whenever currentNode becomes the node to be deleted, previousNode points at the node following currentNode. If currentNode is the last element, previousNode will simply point to null. In the worst-case scenario, you would have to traverse until the end of the list. This means the time complexity will be O(n).
