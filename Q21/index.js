function string_check(str1) {
    if(str1 === null || str1.substring(0, 2) === "Py"){
        return str1
    }else{
       return `Py${str1}`
    }
}

console.log(string_check("thon"))