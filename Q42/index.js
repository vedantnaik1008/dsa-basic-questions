function toCheck(x, y, z) {
    if(x < y && y < z){
        return "Strict mode"
    }else if (x > y && z > y){
        return "Soft mode"
    } 
}

console.log(toCheck(10, 15, 31))
console.log(toCheck(24, 22, 31))