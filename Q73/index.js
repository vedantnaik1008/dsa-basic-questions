function toCheck(arr) {
    return arr.map((element, idx, Array) => Array[(Array.length - 1) - idx]);
}

console.log(toCheck([5, 4, 3]))