function toCheck(x, y, z) {
    if(x % 10 === y % 10 || y % 10 === z % 10 || z % 10 === x % 10){
        return true;
    }else{
        return false;
    }
}

console.log(toCheck(100, 10, 10))