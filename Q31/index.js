function largestNum(x, y, z) {
    let Max_num = 0;
    if(x > y){
        Max_num = x;
    }else{
        Max_num = y
    }
    if(z > Max_num){
        Max_num = z
    }
     return Max_num;
    
}

console.log(largestNum(370, 60, 50));
