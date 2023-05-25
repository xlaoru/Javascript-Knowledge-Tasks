const array = ['JS', 'TS', 'PHP', 'PYTHON', 'Java'] 
const shuffledArray = array.sort( 
  () => Math.random() - 0.5 
) 

console.log(shuffledArray)