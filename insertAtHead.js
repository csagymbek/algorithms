class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
class LinkedList{
  constructor(){
    this.head = new Node(-1);
    this.length = 0;
  }
  insertAtHead(dt){
    var tempNode = new Node(dt);
    tempNode.next = this.head.next;
    this.head.next = tempNode;
    this.length += 1;
    return this;
  }
  isEmpty(){
    return this.length === 0;
  }
  printList(){
    if(this.isEmpty()){
      console.log("Empty list");
      return false;
    } else{
      var temp = this.head.next;
      while(temp !== null){
        process.stdout.write(String(temp.data));
        process.stdout.write(" -> ");
        temp = temp.next;
      }
      console.log("null");
      return true;
    }
  }
}
var list = new LinkedList();
for(var i = 0; i < 10; i++){
  list = list.insertAtHead(i);
}
list.printList();
function insertAtTail(list, value){
  var node = new Node(value);
  currentNode = list.getHead();
  if(currentNode.next === null){
    currentNode.next = node;
    list.length += 1;
    return list;
  }
  while(currentNode.next !== null){
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  list.length += 1;
  return list;
}


// console.log(insertAtTail(0));;//
// console.log(insertAtTail(1));;//
// console.log(insertAtTail(2));;//
// console.log(insertAtTail(5)	);;//
// To start things off, let’s explain the function called printList(self). It simply iterates through the Node using temp and prints their value. The line temp=temp.nextElement; updates temps value to the next element in the linked list. Our iteration ends when temp is null, which means that we’ve reached the last Node in the list.
// insertAthead() takes an integer value as dt and inserts it just after head to make it the first element of the list. The function follows these steps to insert a new Node:
// Create a new Node object with the given value, called tempNode
// Make the nextElement of tempNode the next element of the head node
// tempNode will become the nextElement of head.
// At every instance, we point the head Node to a new Node. Therefore, the time complexity for insertion at head is O(1).
