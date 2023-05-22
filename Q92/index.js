function toCHECK(arr){
    let max = -1;
    let temp;
    for(let i=0;i<arr.length - 1;i++){
        temp = Math.abs(arr[i] - arr[i+1]);
        max = Math.max(max, temp);
    }
    return max;
}

console.log(toCHECK([1, 2, 3, 8, 9]))