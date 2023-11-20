const divisorFunction = (num) => {
    let sum = 0
  
    for (let i = 1; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i
      }
    }
  
    return sum
  }
  
  console.log(divisorFunction(10))
  console.log(divisorFunction(11))
  