function toCheck(arr, k) {
    for(let i=0;i<k;i++){
        let max = i;
        let temp = arr[i]
        
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] > arr[max]){
                max = j;
            }
        }
        arr[i]   = arr[max]
        arr[max] = temp;
    }
    return arr[k-1];
}

console.log(toCheck([1,2,6,4,5], 3))
console.log(toCheck([-10,-25,-47,-36,0], 1))