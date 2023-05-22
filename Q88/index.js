function toCheck(x, y, divisor){
    if(x % divisor === 0 && y % divisor === 0 || x % divisor !== 0 && y % divisor !== 0){
        return true;
    }else{
        return false;
    }
}

console.log(toCheck(10, 25, 5))