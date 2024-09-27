// There is a string, "s", of lowercase English letters that is repeated infinitely many times. Given an integer, "n", find and print the number of letter a's in the first letters of the infinite string.

// Example
// The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

// Function Description
// Complete the repeatedString function in the editor below.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Returns

// int: the frequency of a in the substring

const repeatedString = (s, n) => {  
    let countA = 0;
    let extra = 0;
    let howManyRepeats = Math.floor(n / s.length);
    let leftLength = n - (howManyRepeats * s.length);
    for(let i  = 0; i < s.length; i++) {
        if(s.charAt(i) === "a") {
            countA++;
        }
    }
    for(let i = 0; i < leftLength; i++) {
        if(s.charAt(i) === "a") {
            extra++;
        }
    }
    const total = howManyRepeats * countA + extra;
    return total;
};

console.log(repeatedString("aba", 10));// 7
console.log(repeatedString("a", 1000000000000));// 1000000000000
console.log(repeatedString("aab", 882787));// 588525
console.log(repeatedString("epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq", 549382313570));// 16481469408