function toCheck(str){
    let count = 0;
    for(let i=0; i<str.length;i++){
        for(let j=i+1;j<str.length;j++){
            if(str[i] > str[j]){
                count++;
            }
        }
    }
    return count;
}

console.log(toCheck([1,2,6,5,6]));