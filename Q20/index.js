function toCheck(n1,n2) {
     if ((n1 < 0 && n2 > 0) || (n1 > 0 && n2 < 0)){
        return true
     }else{
        return false
     }
}

console.log(toCheck(1,-1))