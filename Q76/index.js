function toCheck(arr){
    const newarr = [];
    const end = arr.length - 1;
    newarr.push(arr[0], arr[end]);
    return newarr;
}

console.log(toCheck([1, 2, 3]))