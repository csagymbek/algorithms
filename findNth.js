// Challenge 10: Return the Nth Node from the End
// In the findNth function, a certain N is specified as an argument. You simply need to return the node which is N spaces away from the null end of the linked list.
// Solution #1: Double Iteration
function findNth(list, n){
  if(list.isEmpty()){
    return -1;
  }
  var len = list.length;
  var nthPos = len - n;
  if(nthPos < 0 || nthPos > len){
    return - 1;
  }
  var currentNode = list.getHead().next;
  var count = 0;
  while(count < nthPos && currentNode !== null){
    currentNode = currentNode.next;
    count++;
  }
  if(currentNode !== null){
    return currentNode.data;
  }
  return -1;
}
var l1 = new LinkedList();
l1.insertAtHead(54);
l1.insertAtHead(89);
l1.insertAtHead(11);
l1.insertAtHead(40);
l1.insertAtHead(23);
for(var i = 0; i < 5; i++){
  console.log(fincNth(l1, i));
}
findNth(l1, 100);
// In this approach, our main goal is to figure out the index of the node we need to reach. The algorithm follows these simple steps:
// 1.Calculate the length of the linked list
// 2.Check if n is within the length
// 3.Find the position of the node using length - n + 1 (We start from the last node since we can’t start from null)
// 4.Iterate over to the node and return its value
// It performs two iterations so the complexity is O(n).This is the more efficient approach, although it is not an unfamiliar one. Here’s the flow of the algorithm:

Check if n is in the bounds of the list
Move endNode forward n times, while nthNode stays at the head
Move pointers simultaneously
When endNode reaches the end, nthNode is one the Nth position from the end
Return the node’s value

function findNth(list, n){
  if(list.isEmpty()){
    return -1;
  }
  var length = list.length;
  var nthPos = length - n;
  if(nthPos < 0 || nthPos > length){
    return -1;
  }
  var currentNode = list.getHead().next;
  var count = 0;
  while(count < nthPos && currentNode !== null){
    currentNode = currentNode.next;
    count++;
  }
  if(currentNode !== null){
    return currentNode.data;
  }
  return -1;
}
var l1 = new LinkedList();
l1.insertAtHead(54);
l1.insertAtHead(89);
l1.insertAtHead(11);
l1.insertAtHead(40);
l1.insertAtHead(23);
for(var i = 0; i < 5; i++){
  console.log(fincNth(l1, i));
}
findNth(l1, 100);
// This is the more efficient approach, although it is not an unfamiliar one. Here’s the flow of the algorithm:
// 1.Check if n is in the bounds of the list
// 2.Move endNode forward n times, while nthNode stays at the head
// 3.Move pointers simultaneously
// 4.When endNode reaches the end, nthNode is one the Nth position from the end
// 5.Return the node’s value
// A single linear iteration is performed which means that time complexity is O(n).
