const userArray = [ 
    'Alex', 
    'Mike', 
    'Jane', 
    'Mike', 
    'Alex' 
  ] 
  
  let uniqueArray = userArray.reduce(
    (uniqueUser, user) => { 
      return uniqueUser.includes(user) 
        ? uniqueUser 
        : [...uniqueUser, user] 
    }, []
  ) 
  
  console.log(uniqueArray)