function toConvertLowOrUpp(str) {
    if(str.length < 3){
        return str.toUpperCase()
    }else if(str.length >=3){
        return str.substring(0, 3).toLowerCase() + str.substring(3, str.length)
    }
}

console.log(toConvertLowOrUpp("JAVAScript"))
console.log(toConvertLowOrUpp("py"))