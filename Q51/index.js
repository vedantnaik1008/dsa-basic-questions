function covertNum(num){
    const hour = Math.floor(num / 60);
    const minute = num % 60;
    return `${hour}:${minute}`;
}

console.log(covertNum(450))