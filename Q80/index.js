function toCheck(arr){
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]
    return arr
}

console.log(toCheck([1, 2, 3, 4]))