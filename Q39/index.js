function toCheck(x, y){
    let sum = x + y;
    if(sum >= 50 && sum <= 80){
        return "65"
    }else{
        return "80"
    }
}

console.log(toCheck(40, 50))