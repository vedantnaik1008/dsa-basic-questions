function toCheck(arr){
    const max = arr[0] > arr[2] ? arr[0] : arr[2];
    arr[0] = max; 
    arr[1] = max;
    arr[2] = max;

    return arr;
}

console.log(toCheck([20, 30, 40]))