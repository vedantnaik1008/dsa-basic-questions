function toCheck(x, y) {
    let max_val = 0;
    if((x >= 40 && x <= 60) && (y >= 40 && y <= 60)){
        if(x === y){
            return "numbers are same"
        }else if(x > y){
            return x;
        }else{
            return y;
        }
    }else{
        return "numbers dont fit in the given range"
    }
}

console.log(toCheck(50, 60))