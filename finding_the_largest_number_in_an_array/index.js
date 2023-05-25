const numberArray = [1, 7, 26, 4, 82, 19] 
function findMaxNumber(array) { 
  let maxNumber = array[0] 
  
  for (const number of array) { 
    if (maxNumber < number) maxNumber = number 
  } 
  return maxNumber 
} 

console.log(findMaxNumber(numberArray))