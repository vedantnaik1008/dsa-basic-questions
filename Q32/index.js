function largestNum(x, y){
    let num1 = 100 - x
    let num2 = 100 - y
    if(num1 < num2){
        return true;
    }else{
        return false;
    }
}

console.log(largestNum(70, 100))