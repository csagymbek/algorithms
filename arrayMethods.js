const items = [
  {name: "Bike", price: 100},
  {name: "TV", price: 200},
  {name: "Album", price: 10},
  {name: "Book", price: 5},
  {name: "Phone", price: 500},
  {name: "Computer", price: 1000},
  {name: "Keyboard", price: 25}
]
// returns a new array and does not modify the existing one
// const filtered = items.filter((item) =>{
//   return item.price <= 100;
// })
// console.log(filtered);

// const itemNames = items.map((item) =>{
//   return item.name;
// })
// console.log(itemNames);

// const foundItem = items.find((item) =>{
//   return item.name === "Album";
// })
// console.log(foundItem);

// items.forEach((item) =>{
//   console.log(item.price);
// });

// const hasInexpensiveItems = items.some((item) =>{
//   return item.price < 100;
// })
// console.log(hasInexpensiveItems);

const onlyInexpensiveItems = items.every((item) =>{
  return item.price <= 100;
})
console.log(onlyInexpensive)
4
