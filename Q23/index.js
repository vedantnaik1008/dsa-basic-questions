function Swift(str){
    if(str.length <=1){
        return str;
    }else{
        let mid = str.substring(1, str.length - 1)
        return (str.charAt(str.length - 1) + mid + str.charAt(0))
    }
}

console.log(Swift("abc"))