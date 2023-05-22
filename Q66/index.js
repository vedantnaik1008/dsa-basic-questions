function toCheck(str){
    if((str.length >= 3) && (str.substring(0, 3) == "Los") || ((str.substring(0, 3) == "New"))){
        return str;
    }else{
        return "";
    }
}

console.log(toCheck("New york"))