function nop(str) {
    let start_pos = 0;
    let end_pos = str.length;
  
    if (str.length > 0 && str.charAt(0) == 'P') 
      { 
        start_pos = 1; 
      }
  
    if (str.length > 1 && str.charAt(str.length - 1) == 'P') 
    {
      end_pos--;
    }
  
    return str.substring(start_pos, end_pos);
  }
  
  console.log(nop("PythonP"));
  console.log(nop("Python"));
  console.log(nop("JavaScript"));
  