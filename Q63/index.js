function toCheck(str){
    if(str.length >= 3 && str.length % 2 == 1){
        let mid = (str.length + 1) / 2;
        return str.slice(mid -2, mid + 1);
    }else{
        return str;
    }
}

console.log(toCheck('abcdefg'));