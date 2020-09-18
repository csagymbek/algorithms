var laligatObject = {
  prime: function prime(number){
    if(number < 2){
      return false;
    };
    for(var i = 2; i < number; i++){
      if(number % i === 0){
        return false;
      };
    };
    return true;
  },

  laligat: function laligatSum(number){
    var sum = 0;
    for(var i = 2; i <= number; i++){
      if(laligatObject.prime(i)){
        sum += i;
      };
    };
    return sum;
  }
};
console.log(laligatObject["prime"](1));//false
console.log(laligatObject["laligat"](11));//28
console.log(laligatObject["laligat"](10));//17
