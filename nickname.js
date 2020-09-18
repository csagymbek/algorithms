// Write a function nickname(name) that takes in a name string and returns a string representing their nickname. A nickname is the name up to the second vowel repeated twice. See the examples.
function nickname(name){
  var vowels = "aeiou";
  var count = 0;
    for(var i = 0; i < name.length; i++){
      if(vowels.indexOf(name[i]) > -1){
        count++;
        if(count === 2){
          return name.slice(0, i + 1).toUpperCase() + "-" + name.slice(0, i + 1).toUpperCase();
        }
      }
    }
  return name.toUpperCase() + "-" + name.toUpperCase();
}
console.log(nickname('manuel'));//'MANU-MANU'
console.log(nickname('pikachu'));//'PIKA-PIKA'
console.log(nickname('bootcamp'));//'BOO-BOO'
console.log(nickname('bob'));//'BOB-BOB'
