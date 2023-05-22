function toCheck(str){
    let char=str.split("")
    for(let i=0;i<char.length;i++){
        let n = char[i].charCodeAt() - "a".charCodeAt()
        n=(n+1)%26
        char[i]= String.fromCharCode(n + "a".charCodeAt()) 
    }
    return char.join("")
} 

console.log(toCheck("abcdxyz"))