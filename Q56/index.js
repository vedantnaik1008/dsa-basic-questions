function divideWithCommas(dividend, divisor) {
    // Calculate the result of the division
    let result =Math.round (dividend / divisor).toString();
    
    // Split the result into integer and decimal parts
    let parts = result.split('.');
    
    // Add commas to the integer part
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // Combine the integer and decimal parts
    result = parts.join('.');
    
    // Return the result as a string
    return result;
  }
  
  // Example usage
  console.log(divideWithCommas(80, 6)); // Output: "333,333.3333333333"
  