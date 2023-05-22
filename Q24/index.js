function stringChange(str) {
    if(str.length <= 1){
        return str;
    }else{
        let firstChar = str.substring(0,1)
        return (firstChar + str + firstChar)
    }
}

console.log(stringChange("Swift"))