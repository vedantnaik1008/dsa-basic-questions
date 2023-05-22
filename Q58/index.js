function toCHECK(str, n){
    if(str.length >= 3){
      let result =  str.substring(str.length, str.length-3)
      return result.repeat(n)
    }else{
        return false;
    }
}
console.log(toCHECK("Python", 4))