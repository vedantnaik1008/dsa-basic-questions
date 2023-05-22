function toCHECK(str1,str2){
    const first = str1.split("")
    const second = str2.split("")
    let result = true;

    first.sort()
    second.sort()
    for(let i=0;i<Math.max(first.length,second.length); i++){
        if(first[i] != second[i]){
            result = false;
        }
    }
    return result;
}

console.log(toCHECK("xyz", "zyx"))
console.log(toCHECK("xyz", "zyp"))