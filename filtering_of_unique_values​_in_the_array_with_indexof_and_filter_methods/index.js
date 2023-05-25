const userArray = [ 
    'Alex', 
    'Mike', 
    'Jane', 
    'Mike', 
    'Alex' 
  ] 
  
  let uniqueArray = userArray.filter(
    (user, index) => { 
      return index === userArray.indexOf(user) 
    }
  ) 
  
  console.log(uniqueArray)