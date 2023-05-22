function toCheck(str){
   return str.replace(/[^aeiou]/g, "").length;  
}

console.log(toCheck("w3resource.com"))