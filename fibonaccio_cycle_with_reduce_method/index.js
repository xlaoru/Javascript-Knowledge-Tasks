function fibonaccioCycle(amount) { 
    return new Array(amount).fill(0).reduce( 
      (accumulator, zero, index) => [...accumulator, index < 2 
        ? 1 
        : accumulator[index - 1] + accumulator[index -2]], []).join(' ') 
  } 
  
  console.log(fibonaccioCycle(10))