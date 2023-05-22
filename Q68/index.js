function toCheck(str, n){
    const first = str.substring(0, n);
    const last = str.substring(str.length - n);
    return first + last;
}

console.log(toCheck("JavaScript", 2))