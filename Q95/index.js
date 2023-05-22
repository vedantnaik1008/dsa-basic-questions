function toCHeck(arr, old, neew){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === old){
            arr[i] = neew;
        }
    }
    return arr;
}

console.log(toCHeck([1,2,2,3,4,2,7,8], 2, 5))