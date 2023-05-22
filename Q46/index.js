function toCheck(n1, n2) {
    if((n1 % 7 === 0 || n1 % 11 === 0) || (n2 % 7 === 0 || n2 % 11 === 0)){
        return true;
    }else{
        return false;
    }
}

console.log(toCheck(14, 22))