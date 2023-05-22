function toCheck(n){
    return ((Math.abs(100 - n) <= 20) || (Math.abs(400 - n) <= 20))
}

console.log(toCheck(90))