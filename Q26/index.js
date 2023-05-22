function changeStr(str){
    if(str.length <=3){
        return str;
    }else{
        let lastChar = str.substring(str.length - 3, str.length)
        return (lastChar + str + lastChar)
    }
}

console.log(changeStr("python"))