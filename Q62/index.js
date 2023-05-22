function toCheck(str){
    if(str.length >= 3){
        return str.substring(str.length - 3) + str.substring(0, str.length - 3);
    }  
}

console.log(toCheck("javascript"))