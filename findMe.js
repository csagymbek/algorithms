const ar = ["a", "b", "c", "x", "y", "z"];

const findMe = (ar, target) => {  
    let start = 0;
    let end = ar.length - 1;
    if(start > end) {
        return -1;
    }
    const mid = Math.floor((start + end) / 2);
    if(ar[mid] === target) {
        return ar[mid];
    } else if(ar[mid] > target) {
        return findMe(t)
    }
    return -1;
};

console.log(findMe(ar))