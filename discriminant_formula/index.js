
function discriminantFormula(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c
    let x1
    let x2
  
    if (D < 0) {
        return 'x1 = ∅; x2 = ∅'
    } 
    
    else {
        x1 = (-b + Math.sqrt(D, 2)) / (2 * a)
        x2 = (-b - Math.sqrt(D, 2)) / (2 * a)
        return "x1 = " + x1 + "; x2 = " + x2
    }
  }
  
  console.log(discriminantFormula(1, -6, 5))
  console.log(discriminantFormula(1, -0, 5))