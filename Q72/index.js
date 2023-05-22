function toCheck(arr){
    const end = arr.length - 1;
    if(arr[0] == arr[end]){
        return true;
    }else{
        return false;
    }
}

console.log(toCheck([23, 34, 23]))