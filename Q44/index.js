function  toCheck(x, y, z) {
    return ((x >= 20 && (x < y || x < z)) || (y >= 20 && (y < x || y < z)) || (z >= 20 && (z < x || z < y)))
}

console.log(toCheck(23, 45, 10));
console.log(toCheck(23, 23, 10));
console.log(toCheck(21, 66, 75));