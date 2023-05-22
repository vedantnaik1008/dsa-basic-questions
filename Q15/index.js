function diffnumber(n) {
    if (n <= 13) {
        return n - 13
    }else{
        return (n - 13) * 2
    }
}

console.log(diffnumber(11))

