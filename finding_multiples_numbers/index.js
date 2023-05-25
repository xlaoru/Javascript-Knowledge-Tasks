const fizzBuzz = (limit) => { 
    let out = '' 
    
    for (let i = 0; i < limit; i++) { 
      if (i === 0) out = ''
      else if (i % 3 === 0) out += ' fizz' 
      else if (i % 5 === 0) out += ' buzz' 
      else if (i % 3 === 0 && i % 5 === 0) out += ' fizzbuzz' 
      else out += ' ' + i 
    } 
    
    return out 
  } 
  
  console.log(fizzBuzz(11)) 
  console.log(fizzBuzz(22))