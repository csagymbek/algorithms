// 2665. Counter II
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
 
// Example 1:
// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

// Example 2:
// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0

var createCounter = function(init, cals) {
    let count = init;
    const res = [];

    function increment() {
        return ++count;
    }

    function decrement() {
        return --count;
    }

    function reset() {
        count = init;
        return count;
    }

    for(let cal of cals) {
        if(cal === "increment") {
            res.push(increment());
        }
        if(cal === "decrement") {
            res.push(decrement());
        }
        if(cal === "reset") {
            res.push(reset());
        }
    }

    console.log(res);
    return res;
};

var createCounter = function(init) {
    let count = init;

    return { 
        increment: () => ++count, 
        decrement: () => --count, 
        reset: () => {
        count = init;
        return count;
        } 
    };
};

console.log(createCounter(5, ["increment","reset","decrement"])); // [6,5,4]
console.log(createCounter(0, ["increment","increment","decrement","reset","reset"])); // [1,2,1,0,0]