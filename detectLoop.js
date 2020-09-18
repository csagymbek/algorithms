// Challenge 6: Detect Loop in a Linked List
// By definition, a loop is formed when a node in your linked list points to a previously traversed node. You must implement the detectLoop() function which will take a linked list as input and deduce whether or not a loop is present.
function detectLoop(list){
  var visitedNode = [];
  var currentNode = list.getHead().next;
  while(currentNode !== null){
    if(visitedNode.includes(currentNode)){
      return true;
    }
    visitedNode.push(currentNode);
    currentNode = currentNode.next;
  }
  return false;
}
var list = new LinkedList();
list.insertAtHead(21);
list.insertAtHead(14);
list.insertAtHead(7);
var head = list.getHead();
var node = list.getHead();
for(var i = 0; i < 4; i++){
  if(node.next === null){
    node.next = head.next;
    break;
  }
  node = node.next;
}
console.log(detectLoop(list));
// We iterate over the whole linked list and add each visited node to a visitedNodes list or set. At every node, we check whether it has been visited or not. By principle, if a node is revisited, a cycle exists! We iterate the list once. Hence, the runtime of this algorithm is O(n).
