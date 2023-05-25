function fibonaccioCycle(limit) { 
    let a = 0 
    let b = 1 
    let result = b 
    let out = '' 
    
    while (result < limit) { 
      out += result + ' ' 
      result = a + b 
      a = b 
      b = result 
    } 
  
    return out 
  } 
  
  console.log(fibonaccioCycle(100))