function toCHeck(arr){
    let ctr = [];
    let ans = 0;
    for(let i=0;i<10;i++){
        ctr.push(0);
    }
    for(let i=0;i<arr.length;i++){
        ctr[arr[i] - 1]++;
        if(ctr[arr[i] -  1] > ctr[ans]){
            ans = arr[i] - 1
        }
    }
    return ans + 1;
}

console.log(toCHeck([1, 2, 3, 2, 2, 8, 1, 9]))