function squareOrSquareRoot(array) {
    const processedArr = [];
  
   
    for (const num of array) {
      const sqrt = Math.sqrt(num);
  
      if (Number.isInteger(sqrt)) {
        processedArr.push(sqrt);
      } else {
        processedArr.push(num * num);
      }
    }
  
    return processedArr;
  }
  
  const inputArr = [4, 3, 9, 7, 2, 1];
  const processedArr = squareOrSquareRoot(inputArr);
  console.log(processedArr);