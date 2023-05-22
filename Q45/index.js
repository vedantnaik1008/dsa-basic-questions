function toCheck(x, y){
let sum1 = x + y;
let sum2 = Math.abs(x - y);
return (x == 15 || y == 15 || sum1 === 15 || sum2 === 15);

}

console.log(toCheck(11,20))