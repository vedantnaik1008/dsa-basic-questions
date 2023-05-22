function absDiff(n){
    if (n <= 19) {
        return (n - 19)
    }else{
        return (n - 19) * 3
    }
}

console.log(absDiff(2))