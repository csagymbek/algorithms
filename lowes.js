const trans = [
  { category: "Sports", amount: 50 },
  { category: "Sports", amount: 100 },
  { category: "Sports", amount: -20 },
  { category: "Travel", amount: 100 },
  { category: "Dinning", amount: 150 },
  { category: "Travel", amount: 120 },
  { category: "Appliences", amount: 80 },
];

// { "Sports": 100, "Travel": 120,  "Dinning": 150, Appliences: 80 }

const calculateTransaction = (trans) => { 
    let max = -Infinity;
    const requirements = { "Sports": 100, "Travel": 120,  "Dinning": 150, "Appliences": 80 };
    const returnObj = {};
    for(let i = 0; i< trans.length; i++) {
        const { category, amount } = trans[i];
        console.log(returnObj)
        console.log(amount)
        
        // returnObj[category] = max;
       
        if(returnObj.hasOwnProperty(category)) {
            console.log(returnObj);
            // returnObj[category];
            if(amount > returnObj[category]) {
                returnObj[category] = amount;
            }
        } else {
            returnObj[category] = amount;
            // returnObj[category]?.amount = amount;
            console.log(returnObj);
        }
    }
    console.log(returnObj)
    return returnObj;
};

console.log(calculateTransaction(trans));// 

//   [
//     { category: "Tools", amount: 50 },
//     { category: "Tools", amount: -20 },
//     { category: "Dinning", amount: 150 },
//     { category: "Appliences", amount: 80 },
//   ]