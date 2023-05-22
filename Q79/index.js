function toCheck(arr){
    let a=arr[0],b=arr[1];
    return (a == 30 && b == 30) || (a == 40 && b == 40);
}

console.log(toCheck([40, 40]))