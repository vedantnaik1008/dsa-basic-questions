function toCheck(x, y) {
    let sum1 = x + y;
    let sum2 = Math.abs(x - y);
    if (sum1 === 8 || sum2 === 8) {
        return true;
    } else if (x == 8 || y == 8) {
        return true;
    } else {
        return false;
    }
}

console.log(toCheck(8, 16));