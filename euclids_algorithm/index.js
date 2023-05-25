function euclideanAlgorithm(numberOne, numberTwo) { 
    let out = [] 
    
    if (numberOne > numberTwo) { 
      while (numberOne > numberTwo) { 
        numberOne -= numberTwo 
        out.push(numberOne + ' ') 
        while (numberOne < numberTwo) { 
          numberTwo -= numberOne 
          out.push(numberOne + ' ') 
        } 
      } 
    } else if (numberOne < numberTwo) { 
      while (numberOne < numberTwo) { 
        numberTwo -= numberOne 
        out.push(numberOne + ' ') 
        while (numberOne > numberTwo) { 
          numberOne -= numberTwo 
          out.push(numberOne + ' ') 
        } 
      } 
    } else { 
      out = 'Numbers are equal' 
    } 
    
    return out.pop() 
  } 
  
  console.log(euclideanAlgorithm(124, 28)) 
  console.log(euclideanAlgorithm(18, 24))