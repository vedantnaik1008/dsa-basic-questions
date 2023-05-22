function toCheck(num1, num2){
    if((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)){
        return true;
    }else{
        return false;
    }
}

console.log(toCheck(99,99))