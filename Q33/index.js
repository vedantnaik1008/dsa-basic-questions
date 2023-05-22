function toCheck(x, y){
    if((x>= 40 && x<= 60 && y >= 70 && y <= 100) || (x >= 70 && x <= 100 && y >= 70 && y <= 100)){
        return true;
    }else{
        return false;
    }
}

console.log(toCheck(40, 100))