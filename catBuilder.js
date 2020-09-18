// Write a function `catBuilder(name, color, toys)` that returns a cat object with the corresponding properties.
function catBuilder(name, color, toys){
  // var cat {
  //   name: name,
  //   color: color,
  //   toys: toys
  // };
  // return cat;

  // var cat = {};
  // cat.name = name;
  // cat.color = color;
  // cat.toys = toys;
  // return cat;

  var cat = {};
  cat["name"] = name;
  cat["color"] = color;
  cat["toys"] = toys;
  return cat;

}
console.log(catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']));//{name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn']}
console.log(catBuilder('Nyan', 'rainbow', ['poptarts']));//{name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ]}
