function toCheck(arr){
    if(arr.indexOf(1) == -1 && arr.indexOf(3) == -1){
        return true;
    }else{
        return false;
    }
}

console.log(toCheck([0,0]))