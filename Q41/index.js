function toCheck(x, y, z) {
    if( x == y && y == z && z == x){
        return 30;
    }else if(x == y || y == z || z == x){
        return 40;
    }else{
        return 20;
    }
}

console.log(toCheck(8, 8, 8))