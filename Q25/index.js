function findMultiple(num) {
    if(num % 3 === 0 || num % 7 === 0){
        return "true"
    }else{
        return "false"
    }
}

console.log(findMultiple(3))