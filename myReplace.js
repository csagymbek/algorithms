function myReplace(str, before, after){
  function capitalize(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  var str = str.split(" ");
  var newStr = [];
    for(var i = 0; i < str.length; i++){
      if(str[i] === before && before === capitalize(before)){
        newStr.push(capitalize(after));
      } else if(str[i] === before){
        newStr.push(after);
      } else{
        newStr.push(str[i]);
      }
    }
  return newStr.join(" ");
}
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));//A quick brown fox leaped over the lazy dog
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));//"He is Sitting on the couch".
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));//"This has a spelling error".
console.log(myReplace("His name is Tom", "Tom", "john"));//"His name is John".
