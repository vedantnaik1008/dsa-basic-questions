function toCheck(str, n) {
    if(n < 0){
        return false;
    }else{
        return str.repeat(n)
    }
}

console.log(toCheck("abc", 5))