function toCheck(n){
  const end = n.length - 1;
  return n[0] == 1 || n[end] == 1; 
}

console.log(toCheck([1, 0, 1]))