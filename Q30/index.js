function toCheck(str){
    if(str.substring(4, str.length) == "Script"){
         return str.substring(0,4)
    }else{
        return str;
    }
}

console.log(toCheck("JavaScript"))