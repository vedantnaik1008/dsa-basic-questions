function toCheck(arr){
    let max=arr[0].length;
    arr.map(v => max = Math.max(max, v.length));
    let result = arr.filter(v => max == v.length);
    return result;
}

console.log(toCheck(['a', 'aa', 'aaa','aaaaa','aaaa']))