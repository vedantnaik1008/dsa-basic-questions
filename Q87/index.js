function toCheck(arr1, arr2) {
   for(let i=0;i<arr1.length;i++){
    for(let j=i;j<arr1.length;j++){
        let result = true 
        let temp = arr1[i]
        arr1[i]  = arr1[j]
        arr1[j]  = temp;
        for(let k=0;k<arr1.length;k++){
            if(arr1[k]!==arr2[k]){
                result = false;
                break;
            }
          }
          if(result){
            return true;
          }else{
            arr1[j] = arr1[i]
            arr1[i] = temp;
          }
        }
    }
    return false;
}

console.log(toCheck([10,20,30], [10,20,30]))