function toCheck(str){
    let x =0;
    let y =0;
    for(let i=0;i<str.length;i++){
        if(/[A-Z]/.test(str[i])){
            x++;
        }else{
            y++;
        }
    }
    if(y>x)return str.toLowerCase()
        return str.toUpperCase()
}