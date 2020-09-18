class Queue{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    getSize(){
        return this.items.length;
    }

    getFront(){
        if(this.isEmpty()){
            return null;
        } else{
            return this.items[0];
        }
    }

    enqueue(el){
        this.items.push(el);
    }

    dequeue(){
        if(this.isEmpty()){
            return null;
        } else{
            this.items.shift();
        }
    }
}

const newQueue = new Queue();

console.log(newQueue.isEmpty());//true
console.log(newQueue.getSize());//0
console.log(newQueue.getFront());//null
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
console.log(newQueue.isEmpty());//false
console.log(newQueue.getSize());//4
console.log(newQueue.getFront());//1
while(newQueue.isEmpty() === false){
    console.log(newQueue.dequeue());
}
console.log(newQueue.isEmpty());//true
console.log(newQueue.getSize());//0
console.log(newQueue.getFront());//null
// If you look at the output of the code, you can see that the elements are enqueued in the back and dequeued from the front.