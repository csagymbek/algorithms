// class Node{
//   constructor(val){
//     this.val = val;
//     this.next = null;
//   }
// }
// var node = new Node(1);
// // console.log(node);
// class LinkedList{
//   constructor(){
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//
// push(val){
//   var newNode = new Node(val);
//   if(!this.head){
//     this.head = newNode;
//     this.tail = newNode;
//   } else{
//     this.tail.next = newNode;
//     this.tail = newNode;
//   }
//   this.length++;
//   return this;
// }
//
// pop(){
//   if(!this.head){
//     return undefined;
//   }
//   var currentNode = this.head;
//   var newTail = currentNode;
//   while(currentNode.next){
//     newTail = currentNode;
//     currentNode = currentNode.next;
//   }
//   this.tail = newTail;
//   this.tail.next = null;
//   this.length--;
//   if(this.length === 0){
//     this.head = null;
//     this.tail = null;
//   }
//   return currentNode;
// }
//
// shift(){
//   if(!this.head){
//     return false;
//   }
//   this.head = this.head.next;
//   this.length--;
//   if(this.length === 0){
//     this.head = null;
//     this.tail = null;
//   }
//   return this.head;
// }
//
// unshift(val){
//   var newNode = new Node(val);
//   if(!this.head){
//     this.head = newNode;
//     this.tail = newNode;
//   } else{
//     var temp = this.head;
//     this.head = newNode;
//     this.head.next = temp;
//   }
//   this.length++;
//   return this;
// }
//
// get(i){
//   if(i < 0 || i >= this.length){
//     return false;
//   }
//   var current = this.head;
//   var counter = 0;
//   while(counter !== i){
//     current = current.next;
//     counter++;
//   }
//   return current;
// }
//
// set(i, val){
//   if(i < 0 || i >= this.length){
//     return false;
//   }
//   var current = this.head;
//   var counter = 0;
//   while(counter !== i){
//     current = current.next;
//     counter++;
//   }
//   current.val = val;
//   return this;
// }
//
// insert(i, val){
//   if(i < 0 || i === this.length){
//     return false;
//   }
//   var newNode = new Node(val);
//   if(i === 0){
//     return !!this.unshift(val);
//   } else if(i === this.length - 1){
//     return !!this.push(val);
//   } else{
//     var counter = 0;
//     var current = this.head;
//     var prev = this.head;
//     while(counter !== i){
//       var temp = current;
//       current = current.next;
//       prev = temp;
//       counter++;
//     }
//     newNode.next = current;
//     prev.next = newNode;
//     this.length++;
//     return true;
//   }
// }
//
// remove(i){
//   if(i < 0 || i >= this.length){
//     return false;
//   } else if(i === 0){
//     return !!this.shift();
//   } else if(i === this.length - 1){
//     return !!this.pop();
//   } else{
//     var counter = 0;
//     var current = this.head;
//     var prev = this.head;
//     while(counter !== i){
//       var temp = current;
//       current = current.next;
//       prev = temp;
//       counter++;
//     }
//     prev.next = current.next;
//     this.length--;
//     return true;
//   }
// }
//
// reverse(){
//   if(!this.head){
//     return false;
//   }
//   var node = this.head;
//   this.head = this.tail;
//   this.tail = node;
//   var prev = null;
//   var next = null;
//   for(var i = 0; i < this.length; i++){
//     next = node.next;
//     node.next = prev;
//     prev = node;
//     node = next;
//   }
//   return true;
// }
//
// print(){
//   var current = this.head;
//   var count = 0;
//   var arr = [];
//     while(count < this.length){
//     arr.push(current.val);
//     current = current.next;
//     count++;
//     }
//   console.log(arr);
//   }
// }
// var list = new LinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// // list.pop();
// // list.unshift(4);
// // list.shift();
// // console.log(list.get(0));
// // list.set(0, 3);
// // list.shift();
// list.insert(0, 0);
// list.remove(0)
// list.reverse();
// list.print();
// // console.log(list);

class Node{
  constructor(val){
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

// var node = new Node(1);
// console.log(node);

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    var newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else{
      var temp = this.tail;
      this.tail = newNode;
      newNode.prev = temp;
      temp.next = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    if(!this.head){
      return false;
    } else if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else{
      var temp = this.tail;
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return this;
  }

  unshift(val){
    var newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else{
      var temp = this.head;
      this.head = newNode;
      newNode.next = temp;
      temp.prev = newNode;
    }
    this.length++;
    return this;
  }

  shift(){
    if(!this.head){
      return false;
    } else if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else{
      var temp = this.head;
      this.head = temp.next;
      temp.next = null;
      this.head.prev = null;
    }
    this.length--;
    return this;
  }

  reverse(){
    if(!this.head){
      return false;
    }
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var counter = 0;
    var prev = null;
    var next = null;
    while(counter < this.length){
      next = node.next;
      node.prev = next;
      node.next = prev;
      prev = node;
      node = next;
      counter++;
    }
    return this;
  }

  print(){
    var ar = [];
    var counter = 0;
    var current = this.head;
    while(counter < this.length){
      ar.push(current.val);
      current = current.next;
      counter++;
    }
    console.log(ar);
  }
}
var list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
// list.pop();
// list.pop();
// list.unshift(0)
// list.shift();
list.reverse();
list.print();
// console.log(list);
