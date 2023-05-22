function toCHECK(arr){
    let max = 0;
    for(let i=0;i<arr.length;i++){
        for(let k=0; k!=i && k<arr.length;k++){
            const diff = Math.abs(arr[i] - arr[k])
            max=Math.max(max, diff)
        }
    }
    return max;
}

console.log(toCHECK([1, 2, 3, 8, 9]))
console.log(toCHECK([1, 2, 3, 18, 9]))
console.log(toCHECK([13, 2, 3, 8, 9]))