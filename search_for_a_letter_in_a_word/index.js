function letterFinder(word, letter) { 
    let firstCondition = typeof word === 'string' && word.length >= 2 
    let secondCondition = typeof word === 'string' && letter.length === 1
    
    if (firstCondition && secondCondition) { 
      for (let i = 0; i < word.length; i++) { 
        if (word[i] == letter) return 'Letter ' + '"' + letter + '"' + ' found at index ' + i 
        else return 'Letter ' + '"' + letter + '"' + ' not found' 
      } 
    } else return 'Please pass correct arguments to the function' 
  }
  
  console.log(letterFinder([], []))
  console.log(letterFinder('cat', 'c'))
  console.log(letterFinder('cat', 'd'))