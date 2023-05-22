function stringChange(str,charPos){
    let part1 = str.substring(0, charPos)
    let part2 = str.substring(charPos + 1, str.length) 
   return (part1 + part2)
}

console.log(stringChange("Python", 0))