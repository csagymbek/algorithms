// Write a function `hasFavoriteFood(object, food)` that takes in an object and a food string. The function should return true if the object has that favorite food. See the examples below.
function hasFavoriteFood(object, food){
  for(var i = 0; i < object.favoriteFoods.length; i++){
    if(food.indexOf(object.favoriteFoods[i]) > -1){
      return true;
    }
  }
  return false;
}
var dog = {
  name: 'Fido',
  favoriteFoods: ['chicken', 'sausage', 'scooby snacks']
}
console.log(hasFavoriteFood(dog, 'sausage'));//true
console.log(hasFavoriteFood(dog, 'cat food'));//false

var person = {
  name: 'Al',
  favoriteFoods: ['pizza', 'burgers', 'ramen']
}
console.log(hasFavoriteFood(person, 'burgers'));//true
console.log(hasFavoriteFood(person, 'fish'));//false
