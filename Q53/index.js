function toCheck(str){
    return (/a...b/).test(str) || (/b...a/).test(str);
}

console.log(toCheck("abcheck"))