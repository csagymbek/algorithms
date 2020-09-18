function counter(str, target){
    var str = str.split(" ");
    console.log(str);
    var obj = {};
        for(var i = 0; i < str.length; i++){
            if(obj.hasOwnProperty(str[i])){
                obj[str[i]]++;
            } else{
                obj[str[i]] = 1;
            }
        }
    return obj[target];
}
console.log(counter("The fox jumped over the brown fox", "fox")); 