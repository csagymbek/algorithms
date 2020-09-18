import { threadId } from "worker_threads";

class Stack{
    constructor(){
        this.items = [];
        this.top = null;
    }

    getTop(){
        if(this.items.length === 0){
            return null;
        }
    }

    isEmpty(){
        return this.items.length === 0;
    }

    getSize(){
        return this.items.length;
    }

    push(el){
        this.items.push(el);
        this.top = el;
    } 

    pop(){
        if(this.items.length !== 0){
            if(this.items.length === 1){
                this.top = null;
                return this.items.pop();
            } else{
                this.top = this.items[this.items.length - 2];
                return this.items.pop();
            }
        } else{ 
            return null;
        }
    }
}

const newStack = new Stack();
for(var i = 0; i < 5; i++){
    newStack.push(i);
}

for(var i = 0; i < 5; i++){
    newStack.pop();
}

console.log(newStack.getTop());
console.log(newStack.push(1));
console.log(newStack.isEmpty());
console.log(newStack.getSize());
console.log(newStack.pop());
console.log(newStack.isEmpty());