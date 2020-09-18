// Challenge 1:​ Generate Binary Numbers From 1 to n Using Queue
// Implement a function findBin(n), which will generate binary numbers from 1 to n in the form of a string using a queue.
class Queue{
    constructor() {
        this.items = [];
        this.front = null;
        this.back = null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    getFront() {
        if (this.items.length !== 0) {
            return this.items[0];
        } else
            return null;
    }

    size() {
        return this.items.length;
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) {
            return null;
        } else {
            return this.items.shift();
        }
    }
}

function findBin(number) {
    let result = [];
    let myQueue = new Queue();
    var s1, s2;
    myQueue.enqueue(1);
    for (var i = 0; i < number; i++) {
        result.push(String(myQueue.dequeue()));
        s1 = result[i] + "0";
        s2 = result[i] + "1";
        myQueue.enqueue(parseInt(s1));
        myQueue.enqueue(parseInt(s2));
        // console.log(s1)
        // console.log(s2)å
    }
        // console.log(s1)
        // console.log(s2)
        // console.log(result)
        return result;
}
console.log(findBin(3));//["1", "10", "11"]
console.log(findBin(5));//["1", "10", "11", "100", "101"]