function isIsogram(word) { 
    let separatedWord = word.split('') 
    let settedWord = [...new Set(separatedWord)] 
    
    return separatedWord.length === settedWord.length 
  } 
  
  console.log(isIsogram('Dermatoglyphics')) 
  console.log(isIsogram('moose')) 
  console.log(isIsogram('aba'))