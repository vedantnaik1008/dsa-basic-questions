function toCheck(x, y, n){
    if((n < 40) || (n > 10000)){
        return false;
    }else{
        if(n >= x && n <= y){
            return true;
        }else{
            return false;
        }
    }
}

console.log(toCheck(60, 600, 65))